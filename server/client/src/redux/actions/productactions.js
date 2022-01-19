
import axios from 'axios'
import * as action from  "../constants/Productconstants.js"
const url = 'http://localhost:8080'


// upr vali line m action ese hi likha iska koi mtlb nhi hai koi or naam se bhi import kr skte hai 

export const getProducts = ()=> async (dispatch)=>
{
try{
const {data}=await axios.get(`${url}/products`)
dispatch({type:action.GET_PRODUCT_SUCCESS,payload:data })}
catch(error)
{
    dispatch({type:action.GET_PRODUCT_FAIL,payload: error.response })
    
}
}

export const getProductDetails= (id)  => async(dispatch)=>
{
try{
const  {data}=await axios.get(`${url}/product/${id}`)
dispatch({type:action.GET_PRODUCT_DETAIL_SUCCESS,payload:data })
}
catch(error){
    dispatch({type:action.GET_PRODUCT_DETAIL_FAIL,payload: error.response })
}
}

// isme async se phle jo arrow function lgaya hai yha apn thunk middleware ka use kr  rhe h  
// isme shyd esa h ki {data } ki jgh agr apn response likhte to kaam thoda lmba hota mtlb response ke undr ek object hota jiska naam data hota vo object ek array hota hota or us array me bhot sare objects hote isliye apn ne data ko destructure kr lia response me se kyuki vohi apne kaam ka hai 
