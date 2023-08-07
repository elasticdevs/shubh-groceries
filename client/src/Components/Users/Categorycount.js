import React, { useEffect, useState } from "react";
import api from '../../api.js';

export default function Categorycount({element}){
    const[count,setCount] = useState(0);
    useEffect(() =>{
    const fetchcount = async(id) =>{
        try{
            const response = await api.get(`/products/${id}`);
            setCount(response.data.length);
        }
        catch(error){
            console.log(error.response.status)
        }

    }
    fetchcount(element.c_id);
},[element.c_id])

    return <div className="category-count">
        <p>{element.category_name}</p>
        <div>{count}</div>
        </div>
}