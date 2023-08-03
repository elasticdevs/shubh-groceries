const getProductsall = "SELECT * FROM Products";


const getProductsCategory = "SELECT *  FROM Products WHERE  category_id = $1";

const addProducts = "INSERT INTO Products(product_name,price,category_id,stock,description,brand_id,seller_location) Values($1,$2,$3,$4,$5,$6,$7)";

const checkIdExists = "SELECT product_id FROM Products WHERE product_id = $1";

const removeProducts = "DELETE FROM Products WHERE product_id = $1";

const updateProducts = "UPDATE PRODUCTS SET product_name = $2 , price = $3, category_id = $4, stock = $5, description = $6,brand_id = $7 ,seller_location = $8 WHERE product_id = $1";

const getCategories = "SELECT * FROM Category";

const getBrands = "SELECT * FROM Brand";


module.exports = { getProductsall, getProductsCategory, addProducts, checkIdExists,removeProducts,updateProducts,getCategories,getBrands};