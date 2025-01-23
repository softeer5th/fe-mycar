const express = require("express");
const { getCars } = require("../controllers/carController");
const { getModels } = require("../controllers/modelController");
const { getOptions } = require("../controllers/optionController");

const router = express.Router();

router.get("/", getCars);
router.get("/models", getModels);
router.get("/models/options", getOptions);

module.exports = router;
