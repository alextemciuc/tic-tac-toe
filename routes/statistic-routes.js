const { Router } = require('express');
const statisticController = require('../controllers/statistic-controller');
const router = Router();

router.post('/generate', statisticController.generate);

module.exports = router;