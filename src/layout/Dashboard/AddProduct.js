import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AddProduct = () => {
  return (
  <div>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Product Price" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Catagory</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Catagory" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="light" type="submit">
        Add Product
      </Button>
    </Form>  
  </div>
  );
};

export default AddProduct;
