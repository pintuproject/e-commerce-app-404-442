export const cartReducer=(state,{type,payload})=>{
    
    switch(type)
    {
   case 'addToCart':
    return{...state,
        cart:[...state.cart, {...payload ,quantity:1}]    
    }
     
    case 'delete all':
        return {...state.cart,cart:[]

        }
        
    default:
        return{
            ...state
        }

}
}