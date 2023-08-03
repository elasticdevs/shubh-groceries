import React from "react";
import { useState } from "react";
import api from '../api.js'
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

    return(
    <div>

    <h1>This is admin page</h1>

    <button onClick = {fetchProducts}>Products Table</button>

        <table>
            <tr>
            <th>product_id</th>
            <th>product_name</th>
            <th>price</th>
            <th>brand_id</th>
            <th>category_id</th>
            <th>description</th>
            <th>seller_location</th>
            <th>stock</th>
            </tr>
        {
            arr.map((element) =>{
                console.log(element);
                return <tr key = {element.product_id}>
                    <td>{element.product_id}</td>
                    <td>{element.product_name}</td>
                    <td>{element.price}</td>
                    <td>{element.brand_id}</td>
                    <td>{element.category_id}</td>
                    <td>{element.description}</td>
                    <td>{element.seller_location}</td>
                    <td>{element.stock}</td>
                </tr>
            })
        }
        </table>
    </div>

)}

