import React from 'react'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BuyProduct = () => {
  const navigate=useNavigate()
  const ShopAgain=()=>{
    navigate('/home')
  }
  return (
    
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <Alert variant="success">
              <h4>Thank you for your purchase!</h4>
              <p>Your order has been successfully placed. We appreciate your business!</p>
            </Alert>
            <Button variant="primary" onClick={ShopAgain} >
              Shop Again
            </Button>
          </Col>
        </Row>
      </Container>
  )
}

export default BuyProduct