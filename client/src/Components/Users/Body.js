import React from "react";
import Navbar from './Navbar.js'
import ProductRender from "./ProductRender.js";
import api from '../../api.js';
import { useState } from 'react';
import { useEffect } from "react";


export default function Body(){
    const [categorylist,setCategorylist] = useState([])
    const [selectCategory,setSelectCategory] = useState({c_id : "" ,category_name :""})
    const [products,setProducts] = useState([{ product_id: "", product_name: "", price: "",category_id: "", brand_id : "",description: "",seller_location: "",stock: ""}])

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
        fetchcategories();
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
    },[selectCategory])
    console.log(products)
    return (<>
        <Navbar categorylist = {categorylist} selectCategory = {selectCategory} setSelectCategory = {setSelectCategory}/>
        <div>{products.map((element) =>{
            return <ProductRender element = {element} key = {element.product_id}/>
        }
        )}</div>
        </>
    )
}