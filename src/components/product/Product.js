
import './product.css'
import { GlobalStateContext,GlobalDispatchContext } from '../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Card, Button } from 'react-bootstrap';
import {getProductById} from '../../utils/FindProductById'

function Product({product}) {
  const{cart}=useContext(GlobalStateContext)
  const dispatch=useContext(GlobalDispatchContext)
  const navigate=useNavigate()
   
    const{_id,title,description,price,image,rating}=product
    console.log(_id);

     
    const isAlreadyInCart =getProductById(cart,_id)


    const addToCart=()=>{ 
      dispatch(
        {type:'addToCart',
          payload:{_id,title,description,price,image}})
          navigate('/cart')
    }
    const handleGoToCart=()=>{
      navigate('/cart')
    }
    
        
  
  return (
   
   
  <div className="col-sm-4 mt-3">
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <p className='price'>Price {price} </p> 
        <p className='rating'>Rating {rating}/5 </p>
        <Button 
  variant="primary" 
  onClick={ isAlreadyInCart ? handleGoToCart : addToCart}
>
  { isAlreadyInCart ? "Go to Cart" : "Add to cart"}
</Button>
       </Card.Body>
    </Card>
    </div>
 
  )
}


export default Product