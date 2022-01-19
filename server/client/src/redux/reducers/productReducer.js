import * as ActionType from "../constants/Productconstants.js"
// upr vali line m actiontype ese hi likha iska koi mtlb nhi hai koi or naam se bhi import kr skte hai 
export const getProductsReducer= (state={products:[]},action)=>

// state={products:[]} iska mtlb products naam ke ek array of obejcts
{
switch(action.type)
// upr action.type action ek object jo ki dispatch function ke andr jo do value hai type or payload undono ko combine kr ke h 

{
    case ActionType.GET_PRODUCT_SUCCESS:
        return{products:action.payload}


    case ActionType.GET_PRODUCT_FAIL:
        return{erro:action.payload}

        default:
        return state

}
};
export const getProductDetailsReducer= (state={product:{}},action)=>
// {product:{}} iska mtlb product naam ka ek object hoga 
{

    switch(action.type)
// upr action.type action ek object jo ki dispatch function ke andr jo do value hai type or payload undono ko combine kr ke h 

{
    case ActionType.GET_PRODUCT_DETAIL_SUCCESS:
        return{product:action.payload}


    case ActionType.GET_PRODUCT_DETAIL_FAIL:
        return{erro:action.payload}

        default:
        return state

}
}
