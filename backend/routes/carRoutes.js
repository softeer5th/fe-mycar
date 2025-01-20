const express = require('express');
const { getCars } = require('../controllers/carController');
const { getModels } = require('../controllers/modelController');

const router = express.Router();

router.get('/', getCars);
router.get('/models', getModels);

module.exports = router;