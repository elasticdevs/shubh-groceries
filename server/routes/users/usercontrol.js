const { json } = require('express');
const pool = require('../../freshnesecom_db');
const queries = require('./userquery.js');

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

    });
}

function searchResults(req,res){
    const text = `%${req.params.text}%`;
    pool.query(queries.searchResults,[text],(err,results) =>{
        if(err) throw err;
        res.json(results.rows);
    })

}


function searchResultsByCategory(req,res){
    const c_id = parseInt(req.params.id);
    const text = `%${req.params.text}%`;
    pool.query(queries.searchResultsByCategory,[c_id,text],(err,results) =>{
        if(err) throw err;
        res.json(results.rows);
    })

}

function getCategories(req,res){
    pool.query(queries.getCategories,(err,results) =>{
        if(err) throw err;
        res.json(results.rows);
    })
}

function getbrandbyid(req,res){
    const id = parseInt(req.params.id);
    pool.query(queries.getbrandbyid,[id],(err,results) =>{
        if(err) throw err;
        res.json(results.rows);
    })
}




module.exports = { getProductsall, getProductsCategory,searchResults,searchResultsByCategory,getCategories,getbrandbyid}