import React from 'react'
import { Form, Card } from 'react-bootstrap';
import './Filter.css'

const Filter = ({onFilterChange}) => {
     
     
      
        const handleCategoryChange = (event) => {
          const category = event.target.value;
           onFilterChange(category)
           console.log(category)
         
        };
      
         
      
  return (
    <div className='card-filter'> 
    <Card className="p-3 mb-4 mt-5">
    <h5 >Category  </h5>
    <Form>
        <Form.Group>
          <Form.Check
            type="radio"
            label="All"
            name="category"
            value=""
             
            onChange={handleCategoryChange}
          />
          <Form.Check
            type="radio"
            label="Men"
            name="category"
            value="men"
            
            onChange={handleCategoryChange}
          />
          <Form.Check
            type="radio"
            label="Women"
            name="category"
            value="women"
            onChange={handleCategoryChange}
          />
        </Form.Group>
      </Form>
  </Card>
  </div>
  )
}

export default Filter