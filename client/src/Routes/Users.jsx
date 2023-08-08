import  React from 'react';
import { useState } from 'react';
import Header from '../Components/Users/Header.js';
import Body from '../Components/Users/Body.js';
import Footer from '../Components/Users/Footer.js';

export default function Users(){
    const [products,setProducts] = useState([{ product_id: "", product_name: "", price: "",category_id: "", brand_id : "",description: "",seller_location: "",stock: ""}])
    return <div>
        <Header setProducts = {setProducts}/>
        <Body products = {products} setProducts = {setProducts}/>
        <Footer/>
    </div>
}