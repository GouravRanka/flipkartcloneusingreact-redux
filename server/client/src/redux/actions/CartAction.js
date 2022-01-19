import axios from 'axios'
import React from 'react'
import * as action from "../constants/CartConstant.js"



export const AddToCart = (id) =>async(dispatch)=> {
    try{
const {data}= await axios.get(`/product/${id}`)

dispatch({type:action.ADD_TO_CART_SUCCESS,payload:data })
    }
    catch(error)
    {
        console.log("error while calling add to cart api")
    }
   
}
export const removefromcart=(id)=>(dispatch)=>
{
    dispatch({type:action.REMOVE_FROM_CART,payload:id })
}

