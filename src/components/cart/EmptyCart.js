import React from 'react'
import './EmptyCart.css'

const EmptyCart = () => {
    return (
        <div className='emptyCartContainer'>
          <h2 className='heading'>Your Cart is Empty</h2>
          <p className='message'>Looks like you haven't added anything to your cart yet.</p>
        </div>
      );
}

export default EmptyCart