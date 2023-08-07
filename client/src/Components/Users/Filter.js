import React from 'react';
import Categorycount from './Categorycount';
import '../../styles/filter.css';


export default function Filter({categorylist,brands}){
    return <div>
        <span style ={{fontFamily:"Poppins",fontSize :'24px',fontWeight : '600',textTransform:'capitalize',marginLeft : '45px'}}>Categories</span>
        {categorylist.map((element) =>{
            return <Categorycount element = {element} key = {element.c_id}/>
        })}
         <span style ={{fontFamily:"Poppins",fontSize :'24px',fontWeight : '600',textTransform:'capitalize',marginLeft : '45px'}}>Brands</span>
         {brands.map((element) =>{
            return <div  className='brandslist' key = {element.b_id}>
                <input type = "checkbox"/>
                <p>{element.brand_name}</p>
            </div>
         } 
         )}
        </div>
}