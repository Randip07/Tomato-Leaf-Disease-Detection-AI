const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

// Store image in memory (best for ML / API)
const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/predict", upload.single("image"), (req, res) => {
  try {
    // Access image
    const image = req.file;

    if (!image) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    // Image details
    console.log("Filename:", image.originalname);
    console.log("MIME type:", image.mimetype);
    console.log("Size (bytes):", image.size);

    // Image buffer (this is the actual image data)
    const imageBuffer = image.buffer;

    res.json({
      message: "Image received successfully",
      filename: image.originalname,
      mimetype: image.mimetype,
      size: image.size,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
