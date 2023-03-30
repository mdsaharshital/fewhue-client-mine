import React from "react";
import { Button, Table } from "react-bootstrap";
import { useGetAllProductsQuery } from "../../feature/product/productSlice";
import { Link } from 'react-router-dom';

const ManageProduct = () => {
  const { data } = useGetAllProductsQuery();
  console.log("krieee", data);
  return (
    <div>
      <h2 className="text-center">Manage Products</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category.name}</td>
              <td><Link to={`product-details/${product._id}`} className="btn btn-outline-dark btn-sm">Edit</Link> <Button size="sm" variant="outline-danger">Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;