const router = require('express').Router();
const apiRoutes = require('./api');
const home = require('./home');
const login = require('./login');
const signup = require('./signup');
const dashboard = require('./dashboard');
const createpost = require('./createpost');

router.use('/api', apiRoutes);
router.use('/', home);
router.use('/login', login);
router.use('/signup', signup);
router.use('/dashboard', dashboard);
router.use('/createpost', createpost);

module.exports = router;