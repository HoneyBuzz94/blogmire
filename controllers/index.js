const router = requrie('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;