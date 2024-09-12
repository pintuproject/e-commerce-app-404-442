import React, { Fragment, useEffect } from 'react'
import Navigationbar from '../navbar/Navigationbar'
import axios from 'axios'
import { useState } from 'react'
import Product from '../product/Product'
import Filter from '../../filter/Filter'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

const Home = () => {
  const[products,setProducts]=useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

useEffect(()=>{
  (async()=>{
  try{
     await axios
    .get("data.json") // URL to your JSON data
    .then(response => {
      const data = response.data; // Destructure products directly from response.data
      setProducts(data);
      setFilteredProducts(data)
       
    })

         
       
  }
  catch(e){
    console.log(e)
  }
  })
  ()
},[])
console.log(products)
const handleFilterChange = (category) => {
  setSelectedCategory(category);

  // Filter products based on the selected category
  if (category === 'men') {
    setFilteredProducts(products.filter((product) => product.category === 'men'));
  } else if (category === 'women') {
    setFilteredProducts(products.filter((product) => product.category === 'women'));
  } else {
    setFilteredProducts(products); // Show all products if no filter is selected
  }
};

console.log(filteredProducts)


  return (
 <Fragment>
    <Navigationbar/>
    {/* <div class="container mt-4">
    <h1 class="mb-4 text-center">Product Listings</h1>
    <div class="d-flex flex-wrap justify-content-center"> */}
<Container>
      <Row>
        {/* Left Side: Filter */}
        <Col md={3}>
          <Filter  onFilterChange={handleFilterChange}/>
        </Col>

        {/* Right Side: Product Listing */}
        <Col md={9}>
           
        
     

    
    <div className="container mt-5">
  <div className="row">
    {filteredProducts.map((product,index) => (
      <Product key={index} product={product} />
    ))} 
    </div>
    </div>
    </Col>  
    </Row>
    </Container>

 </Fragment> 
  )
}

export default Home