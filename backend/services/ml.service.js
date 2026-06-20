const { execFile } = require("child_process");
const path = require("path");

exports.runModel = (imagePath) => {
  return new Promise((resolve, reject) => {

    const scriptPath = path.join(__dirname, "../ml/predict.py");

    execFile(
      "python3",
      [scriptPath, imagePath],
      { timeout: 30000 },
      (error, stdout, stderr) => {  // ← add stderr here

        // Log stderr so you can see Python's debug prints
        if (stderr) {
          console.log("Python stderr:", stderr);
        }

        if (error) {
          console.error("Python error:", error);
          return reject(error);
        }

        console.log("Raw stdout:", JSON.stringify(stdout)); // ← see exactly what stdout contains

        if (!stdout || !stdout.trim()) {
          return reject("Python returned empty output");
        }

        try {
          const lines = stdout.trim().split("\n");
          const jsonLine = lines[lines.length - 1];
          console.log("Parsing line:", jsonLine); // ← see what you're trying to parse

          resolve(JSON.parse(jsonLine));
        } catch (err) {
          console.error("Parse error:", err);
          reject(`Failed to parse Python JSON output: ${jsonLine}`);
        }
      }
    );
  });
};