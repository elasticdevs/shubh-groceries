const getProductsall = "SELECT * FROM Products";


const getProductsCategory = "SELECT *  FROM Products WHERE  category_id = $1";

const searchResultsByCategory = "SELECT * FROM Products WHERE category_id = $1 AND product_name LIKE $2 ";

const searchResults =  "SELECT * FROM Products WHERE product_name LIKE $1 ";

const getCategories = "SELECT * FROM Category";





module.exports = { getProductsall, getProductsCategory,searchResults,searchResultsByCategory,getCategories};