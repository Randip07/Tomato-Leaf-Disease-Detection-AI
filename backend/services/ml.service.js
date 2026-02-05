const { execFile } = require("child_process");
const path = require("path");

exports.runModel = (imagePath) => {
  return new Promise((resolve, reject) => {

    const scriptPath = path.join(__dirname, "../ml/predict.py");

    execFile(
      "python",
      [scriptPath, imagePath],
      { timeout: 30000 },
      (error, stdout) => {

        if (error) {
          return reject(error);
        }

        if (!stdout) {
          return reject("Python returned empty output");
        }

        try {
          
          const lines = stdout.trim().split("\n");
          const jsonLine = lines[lines.length - 1];

          resolve(JSON.parse(jsonLine));
        } catch (err) {
          reject("Failed to parse Python JSON output");
        }
      }
    );
  });
};
