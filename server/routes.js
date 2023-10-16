const express = require("express");

const controller = require("./controllers/controller");

const router = express.Router();

router.get("", controller.demoFunction);
router.post("", async (req, res) => {
  
});

module.exports = router;
