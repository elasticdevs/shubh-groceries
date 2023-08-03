const express = require('express');
const adminrouter = express.Router();
const admincontrol = require('./admincontrol')

adminrouter.get('/', admincontrol.getProductsall);

adminrouter.get('/category' , admincontrol.getCategories);

adminrouter.get('/brand',admincontrol.getBrands);
adminrouter.get('/:id', admincontrol.getProductsCategory);

adminrouter.post('/', admincontrol.addProducts);

adminrouter.delete('/:id', admincontrol.removeProducts);

adminrouter.put('/:id',admincontrol.updateProducts);






module.exports = adminrouter; 