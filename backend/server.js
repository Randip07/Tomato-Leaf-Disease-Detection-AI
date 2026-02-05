const express = require("express");
const cors = require("cors");
const predictRoutes = require("./routes/predict.routes");

const app = express();
app.use(cors());

app.use("/api", predictRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
