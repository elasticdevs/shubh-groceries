import React, { useEffect } from 'react';
import { useState } from 'react';
import "../../styles/body.css";
import api from '../../api.js';
import {Grid,List} from '../../Svg.js'

export default function Navbar(){
    const [categorylist,setCategorylist] = useState([])
    const [selectCategory,setSelectCategory] = useState(null)

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
    return(<>
        <div className='navbar'>
            {categorylist.map((element) =>{
                return <div key ={element.id} className='navbar-element' onClick={() => setSelectCategory(element)}>{element.category_name}</div>
            }
            )}
        </div>
        <div className='selected-navbar'>  
            <p style = {{color :'#a9a9a9'}}>Homepage</p>
            <p style = {{color :'#a9a9a9'}}>/</p>
            {selectCategory &&<p>{selectCategory.category_name}</p>}
        </div>

        <div className='name-view'>
            {selectCategory &&<div className='category-heading'>{selectCategory.category_name}</div>}
            <div className='display-icons'>
                <span style = {{color:'#151515'}}><Grid/>Grid View</span>
                <span><List/>List View</span>
                <span>Products</span>
            </div>
        </div>
        </>


    )
}