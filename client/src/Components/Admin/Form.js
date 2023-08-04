import React from 'react';

export default function Form ({postarr,setPostarr,postProducts}){
    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value =  e.target.value
        setPostarr({...postarr,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        postProducts();
    }
    return(
    <form style = {{display:"flex",flexDirection:"column",flexWrap : "wrap"}}>
       <div style ={{height:'60px'}}><label>Product_Name:</label>
       <input type = "text" placeholder = "Productname" name = "name" 
       value = {postarr.name} onChange={handleInput} /> </div>

       <div style ={{height:'60px'}}><label>Price:   </label>
       <input type = "number" placeholder = "Cost" name = "price" 
       value = {postarr.price} onChange={handleInput}/> </div>

       <div style ={{height:'60px'}}><label>Category_ID:</label>
       <input type = "number" placeholder = "c_id" name = "c_id" 
       value = {postarr.c_id} onChange={handleInput}/> </div>

       <div style ={{height:'60px'}}><label>Stock:</label>
       <input type = "number" placeholder = "Stock" name = "stock" 
       value = {postarr.stock} onChange={handleInput}/> </div>

       <div style ={{height:'60px'}}><label>Description:</label>
       <input type = "text" placeholder = "About"  name = "des" 
       value = {postarr.des} onChange={handleInput}/> </div>

       <div style ={{height:'60px'}}><label>Brand_id:</label>
       <input type = "number" placeholder = "b_id"name = "b_id" 
       value = {postarr.b_id} onChange={handleInput}/> </div>

       <div style ={{height:'60px'}}><label>Seller_Location:</label>
       <input type = "text" placeholder = "Sender address"name = "loc" 
       value = {postarr.loc} onChange={handleInput}/> </div>

        <button style = {{width:"40px"}}onClick = {handleSubmit}> Add </button>

    </form>)
}