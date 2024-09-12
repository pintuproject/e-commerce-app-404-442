import React, { useContext } from 'react'
import Navigationbar from '../navbar/Navigationbar'
import {  GlobalStateContext } from '../context/CartContext'
 
import ProductCardHoroizontal from '../product/ProductCardHoroizontal'
import EmptyCart from './EmptyCart'


  const ProductCart = () => {
  const { cart } = useContext(GlobalStateContext);
    console.log(cart)
  
  return (
    <> 
    <Navigationbar/>
     
      {/* <h1>You have {cart.length} items</h1> */}
      {/* {cart && cart.lenght>0 ? <h1>your cart has {cart.length} items</h1>:<h1>your cart is empty</h1>} */}
     
    <div>
      {/* {cart.length > 0 ?cart.map((product,id)=>< ProductCardHoroizontal key={id} product={product}/>):<h1> your cart is empty</h1>}
       */}
       {cart && cart.length > 0 ?<ProductCardHoroizontal cart={cart}/>: <EmptyCart/>}
    </div>
    </>
  )
}

export default ProductCart