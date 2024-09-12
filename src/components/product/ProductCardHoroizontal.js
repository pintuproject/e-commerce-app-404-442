import React, { useContext } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { GlobalDispatchContext } from '../context/CartContext'
 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'

function ProductCardHoroizontal({cart }) {
  const[buy,setBuy]=useState(false)

  const dispatch=useContext(GlobalDispatchContext)
  const navigate=useNavigate()

     const totalPrice=cart.reduce((total,item)=>total+item.price,0)
     console.log(totalPrice)
  const handleBuy=()=>{
    setBuy(true)
    dispatch({
      type:'delete all'
    })
navigate('/buy')

  }
  return (
     
    <Container fluid>  
      <Row>
        <Col sm={8}>
          <Row>
            {cart.map((product, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className='card-item' style={{ width: '18rem',height:'22rem' }}>
                  <Card.Img variant="top" src={product.image} style={{height: '150px', objectFit: 'cover'}} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <p className="price">Price: {product.price}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

         
        {!buy ?(
        <Col md={4}>
          <Card className='price-item' style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <Card.Text>Total Items: {cart.length}</Card.Text>
              <p className="price">Total Price: {totalPrice}</p>
              <Button onClick={handleBuy}variant="success">Place Order</Button>
            </Card.Body>
          </Card>
        </Col>):<h1>Thank you</h1>
        
}
      </Row>
    </Container>
    
  );
}

export default ProductCardHoroizontal;
