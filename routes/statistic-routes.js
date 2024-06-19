const { Router } = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const statisticController = require('../controllers/statistic-controller');
const router = Router();

router.post('/generate', statisticController.generate);
router.get('/', authMiddleware, statisticController.getData);

module.exports = router;