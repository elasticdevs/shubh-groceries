import React from "react";
import { useState } from "react";
import api from '../api.js'
import Table from '../Components/Admin/Table.js'
export default function Admin(){
    const [arr,setarr] = useState([]);




        const fetchProducts = async () => {
            try
            {
                const response = await api.get('/admin/');
                setarr(response.data);
            }


            catch(error){
                console.log(error.response.status)
            }
            
        }

        const fetchCategory = async () =>{
            try
            {
                const response = await api.get('/admin/category');
                setarr(response.data);
            }


            catch(error){
                console.log(error.response.status)
            }
        }

        const fetchBrand = async () =>{
            try
            {
                const response = await api.get('/admin/brand');
                setarr(response.data);
            }


            catch(error){
                console.log(error.response.status)
            }
        }


    console.log(arr)
    return(
    <div>

    <h1>This is admin page</h1>

    <button onClick = {fetchProducts}>Products Table</button>
    <button onClick = {fetchCategory}>Category Table</button>
    <button onClick = {fetchBrand}> Brand Table</button>
    {arr.length>0 &&<Table arr = {arr}/>}
    </div>

)}

