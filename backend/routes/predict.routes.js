const express = require("express");
const multer = require("multer");
const { predictDisease } = require("../controllers/predict.controller");
const { getCure } = require("../controllers/getCure");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/predict", upload.single("image"), predictDisease);
// router.post("/predict", upload.single("image"), (req, res)=>{
//   res.send("OK")
// });

// Generate AI Response
router.post("/getCure", getCure);


module.exports = router;
