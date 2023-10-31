const express = require("express");
const cors = require("cors");
const cron = require("node-cron");

const routes = require("./routes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(async (req, res, next) => {
  try {
    await next();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error });
  }
});

cron.schedule("", () => {});
app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
