import React, { useState } from "react";
import { useEffect } from "react";
import '../../styles/header.css';
import PreHeader  from './PreHeader.js';
import api from '../../api.js';
import {Search,UserIcon,Basket} from '../../Svg.js';



export default function Header({setProducts}){
    const[categorylist,setCategorylist] = useState([]);
    const[text,setText] = useState("");
    const[selectedid,setSelectedid] = useState("");
    const[searchdata,setSearchdata] = useState([])

    useEffect(() =>{
        const fetchcategories = async() =>{
            try{
                const response = await api.get('/products/category')
                setCategorylist(response.data)
            }
            catch(error){
                console.log(error.response.status)
            }
        
        }
        fetchcategories();
    },[])

    useEffect(() =>{
        const searchapi = async(id,input) =>{
            try{
                if(id){
                
                    const response = await api.get(`/products/search/${id}/${input}`)
                    console.log(response.data)
                    setSearchdata(response.data);
                }

                else{
                    if(input){
                    const response = await api.get(`/products/search/${input}`)  
                    console.log(response.data)
                    setSearchdata(response.data);
                    }
                    else{
                        setSearchdata([])
                    }
                }


            }
            catch(error){
                console.log(error.response.status)
            }
        }
        searchapi(selectedid,text);

    },[text,selectedid])
    const handlesearchbox = (e) => {
        setText(e.target.value)
    }

    const handleselect = (e) =>{
        setSelectedid(e.target.value);
      
    }
    console.log('search-data',searchdata)
    return (<>
        <PreHeader/>
        <div className="header-container">
        <img src = "./images/Freshnesecom.jpg" alt ="Freshnesecom" className="title-image"/>


        <div className="search-box">
            <select className="select-box" onChange={handleselect}>
                <option value = "">All Categories</option>
                {categorylist.map((element) =>{
                    return <option key = {element.c_id} value = {element.c_id}>{element.category_name}</option>
                })}
            </select>
            <label className="search-label">|</label>
            <div className="search-option"><input type = 'text' placeholder = 'Search Products, categories ...' className="search-feild"  value = {text}  onChange={handlesearchbox}/>
            <div className="search-dropdown">
                {searchdata.map((element) =>{
                    return <li key = {element.product_id}>{element.product_name}</li>
                })}
            </div>
            </div>
        <span onClick = {() => {setProducts(searchdata)}}><Search/></span>
        </div>
        <div className="icons">
            <UserIcon/>
            <Basket/>
        </div>
        </div>
        </>
    )
}