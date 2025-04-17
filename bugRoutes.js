const express = require('express');
const router = express.Router();
const bugController = require('../Controllers/bugController');

router.post('/bugs', bugController.submitBug);
router.get('/bugs', bugController.viewAllBugs);

module.exports = router;
