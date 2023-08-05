import React, { useState } from "react";
import { useEffect } from "react";
import '../../styles/header.css';
import PreHeader  from './PreHeader.js';
import api from '../../api.js';
import {Search,UserIcon,Basket} from '../../Svg.js';






export default function Header(){
    const[categorylist,setCategorylist] = useState([]);

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
    
    return (<>
        <PreHeader/>
        <div className="header-container">
        <img src = "./images/Freshnesecom.jpg" alt ="Freshnesecom" className="title-image"/>


        <div className="search-box">
            <select className="select-box">
                <option value = "">All Categories</option>
                {categorylist.map((element) =>{
                    return <option key = {element.c_id} value = {element.c_id}>{element.category_name}</option>
                })}
            </select>
            <label className="search-label">|</label>
            <input type = 'text' placeholder = 'Search Products, categories ...' className="search-feild"/>
            <Search/>
        </div>
        <div className="icons">
            <UserIcon/>
            <Basket/>
        </div>
        </div>
        </>
    )
}