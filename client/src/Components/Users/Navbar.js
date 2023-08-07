import React from 'react';
import "../../styles/body.css";

import {Grid,List} from '../../Svg.js'

export default function Navbar({categorylist,selectCategory,setSelectCategory}){
    return(<>
        <div className='navbar'>
            {categorylist.map((element) =>{
                return <div key ={element.c_id} className='navbar-element' onClick={() => setSelectCategory(element)}>{element.category_name}</div>
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