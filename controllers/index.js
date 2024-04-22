const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// use '/' for all home routes
router.use('/', homeRoutes);
// use '/api' for all api routes
router.use('/api', apiRoutes);

// Export routes for server.js to use.
module.exports = router;