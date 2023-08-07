import React, { useEffect, useState } from "react"; 
import '../../styles/body.css';
// import api from '../../api.js';


export default function ProductRender({element}){
    // const[name,Setname] = useState("");

    // useEffect(()  =>{
    //     const getbrands = async(id) =>{
    //         try{
    //         const response = await api.get(`/products/brand/${id}`)
    //         Setname(response.data)
    //         }
    //         catch(error){
    //             console.log(error.response.status)
    //         }

    //     }
    //     getbrands(element.brand_id)
    // },[element])
    return (
        <div className="product-pattern">

            <div className="image-background"></div>
            <div className="product">
                <div className="product-detail">
                    <div>
                    <span style ={{fontFamily:"Poppins",fontSize :'24px',fontWeight : '600',textTransform:'capitalize'}}>{element.product_name}</span> 
                    <p style = {{fontSize:'12'}}>{element.description}</p>
                    </div>

                    <div className="product-info">
                        <div>
                        <p>Freshness </p>
                        <p>Farm</p>
                        <p>Delivery</p>
                        <p>Stock</p>
                        </div>

                        <div>
                            <p><span style={{color : "#6A983C"}}>New</span> (Extra fresh)</p>
                            <p></p>
                            <p>{element.seller_location}</p>
                            <p style={{color : '#6A983C'}}>{element.stock} pcs</p>
                        </div>

                    </div>

                </div>
                <div className="price-detail">
                    <span style ={{fontSize :'24px',fontWeight : '600' , fontFamily:"Poppins"}}>{element.price} USD</span>

                    <div>
                    <p style = {{fontFamily:"Poppins",color: "#a9a9a9",fontSize:'12px',fontWeight : '600'}}>Free Shipping</p>
                    <p style = {{color: "#a9a9a9",fontSize:'12px'}}  >Delivery in 1 day</p>
                    </div>

                    <div>
                        <div className="button-product-details">Product Detail &#62;</div>
                        <div className="button-wishlist">Add to wish list</div>
                    </div>


                </div>
            </div>

        </div>
    )
}