const { pool } = require("../config/db");

exports.demoFunction = async (req, res) => {
  try {
    res.json();
  } catch (error) {
    console.error("", error);
    res.status(500).json({ error: error });
  }
};
