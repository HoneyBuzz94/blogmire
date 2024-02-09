const router = require('express').Router();
const apiRoutes = require('./api');
const home = require('./home');
const login = require('./login');
const signup = require('./signup');

router.use('/api', apiRoutes);
router.use('/', home);
router.use('/login', login);
router.use('/signup', signup);

module.exports = router;