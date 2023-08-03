const pool = require('../../freshnesecom_db');
const queries = require('./adminquery');

function getProductsall(req, res) {
    pool.query(queries.getProductsall, (err, results) => {
        if (err) throw err;
        res.json(results.rows);

    })

};

function getProductsCategory(req, res) {
    const c_id = parseInt(req.params.id);
    pool.query(queries.getProductsCategory, [c_id], (err, results) => {
        if (err) throw err;
        res.json(results.rows);
    })
};


function addProducts(req, res) {
    const { name, price, c_id, stock, des, b_id, loc } = req.body;
    console.log(req.body.c_id)
        pool.query(queries.addProducts, [name, price, c_id, stock, des, b_id, loc], (err, results) => {
            if (err) throw err;
            res.send("Successfully added");
        })
}

function removeProducts(req,res) {
    const id = req.params.id
    pool.query(queries.checkIdExists,[id],(err,results) =>{
        if(err) throw err;
        if(!results.rows.length){
            return res.send("does not exists")
        }
        pool.query(queries.removeProducts,[id],(err,results) =>{
            if(err) throw err;
            res.send("Deleted Successfully")
        })
    })
}


function updateProducts(req,res){
    const id = req.params.id
    pool.query(queries.checkIdExists,[id],(err,results) =>{
        if(err) throw err;
        if(!results.rows.length){
            return res.send("does not exists");
        }
        const { name, price, c_id, stock, des, b_id, loc } = req.body;
        pool.query(queries.updateProducts,[id,name, price, c_id, stock, des, b_id, loc],(err,results)=>{
            if(err) throw err;
            res.send("Updated Successfully");
        })
    })
}

function getCategories(req,res){
    pool.query(queries.getCategories,(err,results) =>{
        if(err) throw err;
        res.json(results.rows);
    })

}

function  getBrands(req,res){
    pool.query(queries.getBrands,(err,results) =>{
        if(err) throw err;
        res.json(results.rows);
    })

}


module.exports = { getProductsall, getProductsCategory, addProducts,removeProducts,updateProducts,getCategories,getBrands}