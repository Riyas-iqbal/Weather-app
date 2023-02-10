const express = require('express');
const router = express.Router();
const userController = require('../contollers/userController');

router
    .get('/',userController.index)
    .get('/weather',userController.weather)
    .get('/about',userController.about)
    .get('/help',userController.help)
    .get('*',userController.error)




module.exports = router;