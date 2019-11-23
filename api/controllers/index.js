const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
const user = require('./user')
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/user', user);
router.use('/application-configuration', appConfigController);


module.exports = router;