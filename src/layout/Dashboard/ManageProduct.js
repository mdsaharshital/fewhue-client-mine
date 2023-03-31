import React from "react";
import { Button, Table } from "react-bootstrap";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../feature/product/productSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import './OrderDetails.css'

const ManageProduct = () => {
  const { data } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  console.log("krieee", data);
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    console.log("id", id);
    if (confirmed) {
      deleteProduct(id).finally(() => {
        toast.success("deleted successfully");
      });
    }
  };
  return (
    <div>
      <h2 className="text-center">Manage Products</h2>
      <Table striped borderless hover responsive>
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
            <tr key={index}>
              <td className="fs-4">{index + 1}</td>
              <td className="fs-4">{product.name}</td>
              <td className="fs-4">{product.price}</td>
              <td className="fs-4">{product.category.name}</td>
              <td className="fs-4">
                <Link
                  to={`product-details/${product._id}`}
                  className="fs-6 mx-2 btn btn-outline-dark btn-sm"
                >
                  Edit
                </Link>
                <Button
                  variant="outline-danger"
                  className="fs-6"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
