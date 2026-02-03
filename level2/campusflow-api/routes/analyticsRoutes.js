const router = require('express').Router();
const ctrl = require('../controllers/analyticsController');

router.get('/stats', ctrl.getStats);

module.exports = router;
