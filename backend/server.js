const express = require("express");
const cors = require("cors");
const predictRoutes = require("./routes/predict.routes");

const app = express();
app.use(cors());



const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

app.use("/api", predictRoutes);
