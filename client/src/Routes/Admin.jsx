import React from "react";
import { useState } from "react";
import api from '../api.js'
import Table from '../Components/Admin/Table.js'
import Form from '../Components/Admin/Form.js';


function ForDelete({getid,setGetid,deleteProducts}){
    return (
    <div>
        <label>Product id : </label>
        <input type = 'number' placeholder = 'id' name = 'p_id' value = {getid} onChange={(e) => {setGetid(e.target.value)}}/>
        <button onClick = {() => {deleteProducts(getid)}}>Delete</button>
    </div>)

}

function ForUpdate({getUpdateid,setUpdateid,updateProducts,postarr,setPostarr}){
    const handleUpdate = ()=>{
        updateProducts(getUpdateid)
        
    }
    return (
        <>
        <div style = {{height : '60px'}}>
            <label>Product id : </label>
            <input type = 'number' placeholder = 'id' name = 'p_id' value = {getUpdateid} onChange={(e) => {setUpdateid(e.target.value)}}/> 
        </div>
        <Form  postarr={postarr} setPostarr={setPostarr} postProducts={handleUpdate}/>
        </>

    )
}



export default function Admin(){
    const [arr,setarr] = useState([]);
    const [postarr,setPostarr] = useState({
        name:"", price : null , c_id : null, stock : null, des : "", b_id : null, loc : "" 


    });
    const [isvisible,setVisible] = useState(false);
    const [getDeleteid,setGetDeleteid] = useState(false) 
    const [getUpdateid,setUpdateid] = useState(false)


        const fetchProducts = async () => {
            try
            {
                const response = await api.get('/admin/');
                setarr(response.data);
            }


            catch(error){
                console.log(error.response.status)
            }
            setVisible(false)
            setGetDeleteid(null)
            setUpdateid(null)
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
            setVisible(false)
            setGetDeleteid(null)
            setUpdateid(null)
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
            setVisible(false)
            setGetDeleteid(null)
            setUpdateid(null)
        }

        const postProducts = async () =>{
            try{
                const response = await api.post('/admin',postarr);
                console.log(response.data)

            }
            catch(error){
                console.log(error.response.status)
            }
            setPostarr({
                name:"", price : null , c_id : null, stock : null, des : "", b_id : null, loc : "" 
            })
            setarr([])
        }

        const deleteProducts = async (p_id) =>{
            try{
                const response = await api.delete(`/admin/${p_id}`);
                console.log(response.data)
            }
            catch(error){
                console.log(error.response.status)
            }
        }

        const updateProducts = async (p_id) =>{
            try{
                const respose = await api.put(`/admin/${p_id}`,postarr);
                console.log(respose.data)
            }
            catch(error){
                console.log(error.response.status)
            }
        }

    return(
    <div>

    <h1>This is admin page</h1>

    <button onClick = {fetchProducts}>Products Table</button>
    <button onClick = {fetchCategory}>Category Table</button>
    <button onClick = {fetchBrand}> Brand Table</button>
    <button onClick = {() => {setVisible(true);setarr([]);setGetDeleteid(false);setUpdateid(false)}}>Add Products</button>
    <button onClick={() => {setVisible(false);setarr([]);setUpdateid(false);setGetDeleteid(true)}}>Delete Product</button>
    <button onClick = {() =>{setUpdateid(true);setVisible(false);setGetDeleteid(false);setarr([])}}>Update Products</button>
    {getDeleteid && <ForDelete getid={getDeleteid} setGetid={setGetDeleteid} deleteProducts={deleteProducts}/>}
    {isvisible && <Form postarr = {postarr} setPostarr = {setPostarr} postProducts = {postProducts}/>}
    {arr.length>0 &&<Table arr = {arr}/>}
    {getUpdateid && <ForUpdate getUpdateid = {getUpdateid} setUpdateid = {setUpdateid} updateProducts = {updateProducts} postarr = {postarr} setPostarr = {setPostarr}/>}
    </div>

)}

