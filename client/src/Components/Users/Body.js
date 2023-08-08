import React from "react";
import Navbar from './Navbar.js'
import ProductRender from "./ProductRender.js";
import api from '../../api.js';
import Filter from "./Filter.js";
import { useState } from 'react';
import { useEffect } from "react";


export default function Body({products,setProducts}){
    const [categorylist,setCategorylist] = useState([])
    const [selectCategory,setSelectCategory] = useState({c_id : "" ,category_name :""})
    const[brands,setBrands] = useState([])

    useEffect(() =>{
        const fetchcategories = async() =>{
            try{
                const response = await api.get('/products/category')
                setCategorylist(response.data)
                setSelectCategory(response.data[0])
            }
            catch(error){
                console.log(error.response.status)
            }
        
        }
        const fetchbrands = async() =>{
            try{
                const response = await api.get('/admin/brand')
                setBrands(response.data)
            }
            catch(error){
                console.log(error.response.status)
            }
        }
        fetchcategories();
        fetchbrands();
    },[])

    useEffect(() =>{
        const fetchproducts = async(category_id) =>{
            try{
                const response = await api.get(`/products/${category_id}`)
                setProducts(response.data)
            }
            catch(error){
                console.log(error.response.status)
            }
        }
        fetchproducts(selectCategory.c_id)
    },[selectCategory,setProducts])
    console.log(products)
    return (<>
        <Navbar categorylist = {categorylist} selectCategory = {selectCategory} setSelectCategory = {setSelectCategory}/>
        <div className="products-body-layout">
        <div className="filters"><Filter categorylist = {categorylist} brands = {brands}/></div>
        <div>
        {products.map((element) =>{
            return<div className="display-products"> <ProductRender element = {element} key = {element.product_id} brands = {brands}/></div>
        }
        )}</div>
        </div>
        </>
    )
}