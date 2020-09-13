const express = require("express");

const {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers,
} = require("../controllers/calculator");

const router = express.Router();

router.get("/", () => {});
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/add", addNumbers);

router.post("/sub", subNumbers);

router.post("/multiply", mulNumbers);

router.post("/divide", divNumbers);

module.exports = router;
