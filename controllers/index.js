const router = require('express').Router();

const apiRoutes = require('./api');
const hmepageRoutes = require('./hmepgeRoutes');

router.use('/api', apiRoutes);
router.use('/', hmepageRoutes);

module.exports = router;