const { runModel } = require("../services/ml.service");

exports.predictDisease = async (req, res) => {
  console.log("UPLOADED FILE:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "Image not uploaded" });
  }

  try {
    const result = await runModel(req.file.path);

   
    console.log("PREDICTION RESULT:", result);

    return res.json(result);
  } catch (error) {
    console.error("PREDICTION ERROR:", error);
    return res.status(500).json({ error: "Prediction failed" });
  }
};
