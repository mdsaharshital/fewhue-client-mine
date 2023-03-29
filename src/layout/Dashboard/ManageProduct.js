import React from "react";
import { Table } from "react-bootstrap";
import { useGetAllProductsQuery } from "../../feature/product/productSlice";

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
              <td>edit</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
