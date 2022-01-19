import * as ActionType from '../constants/CartConstant'
// upr vali line m actiontype ese hi likha iska koi mtlb nhi hai koi or naam se bhi import kr skte hai 
export const CartReducer= (state={CartItems:[]},action)=>

// state={products:[]} iska mtlb products naam ke ek array of obejcts
{
switch(action.type)
// upr action.type action ek object jo ki dispatch function ke andr jo do value hai type or payload undono ko combine kr ke h 

{
    case ActionType.ADD_TO_CART_SUCCESS:
        const item=action.payload;
      const exist=  state.CartItems.find(product=>product.id===item.id)
      if(exist) return;
    
        
      
          return{...state,CartItems:[...state.CartItems,item]}
     
          case ActionType.REMOVE_FROM_CART:
            console.log(state.CartItems)
            console.log(action.payload);
              return{...state,CartItems:state.CartItems.filter(product=>product.id !==action.payload)}
              

  

        default:
        return state

}
};