const express = require('express');
const router = express.Router();
const usercontrol = require('./usercontrol.js');



router.get('/', usercontrol.getProductsall);

router.get('/category' ,usercontrol.getCategories);

router.get('/:id', usercontrol.getProductsCategory)

router.get('/search/:id/:text',usercontrol.searchResultsByCategory)

router.get('/search/:text',usercontrol.searchResults)

module.exports = router; 