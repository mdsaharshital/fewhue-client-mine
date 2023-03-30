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
            <th className="fs-4">#</th>
            <th className="fs-4">Product Name</th>
            <th className="fs-4">Price</th>
            <th className="fs-4">Category</th>
            <th className="fs-4">Manage</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product, index) => (
            <tr>
              <td className="fs-4">{index + 1}</td>
              <td className="fs-4">{product.name}</td>
              <td className="fs-4">{product.price}</td>
              <td className="fs-4">{product.category.name}</td>
              <td className="fs-4"><Link to={`product-details/${product._id}`} className="btn btn-outline-dark btn-sm">Edit</Link> <Button size="sm" variant="outline-danger">Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;