const router = require('express').Router();
const ctrl = require('../controllers/applicationController');

router.post('/', ctrl.createApplication);
router.get('/', ctrl.getApplications);

module.exports = router;
