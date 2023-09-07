const express = require("express");
const {
  task1
} = require("../controller/hngController");
const router = express.Router();
router.get("/", task1);
module.exports = router;