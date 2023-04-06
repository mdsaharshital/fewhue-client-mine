import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useGetAllCategoryQuery } from "../../feature/category/categoryApi";
import {
  useGetAllProductsQuery,
  useGetProductPhotoQuery,
  useUpdateProductMutation,
} from "../../feature/product/productSlice";
import { useState } from "react";
import { photoConverter } from "../../utils/photoConverter";
import { toast } from "react-hot-toast";
import "./OrderDetails.css";

const UpdateProductDetails = () => {
  const { id } = useParams();
  const { data: categoryData } = useGetAllCategoryQuery();
  const { data: picData } = useGetProductPhotoQuery(id);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetAllProductsQuery();
  const selectedProduct = data?.products?.find((product) => product._id === id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (formDa) => {
    try {
      toast.dismiss(); // Dismiss the previous toast
      toast.loading("updating product"); // Show a loading message
      const { data } = await updateProduct(formDa);
      console.log("data", data);
      if (data.success) {
        toast.dismiss(); // Dismiss the previous toast
        toast.success("Product updated successfully ");
      }
    } catch (e) {
      toast.dismiss(); // Dismiss the previous toast
      toast.error("Failed to update product");
    }
  };

  //
  useEffect(() => {
    if (selectedProduct) {
      reset(selectedProduct);
    }
  }, [selectedProduct, reset]);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center shadow m-4">
        <h2>
          Product Details (Current):
          <h5>Name: {selectedProduct?.name}</h5>
          <h5>Category Name: {selectedProduct?.category.name}</h5>
        </h2>
        <img src={photoConverter(picData)} className="w-25" alt="" />
      </div>
      <Form className="formm my-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-danger">
              {errors.name.message}
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Product Price"
            {...register("price", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
          {errors.price?.type === "required" && (
            <span className="label-text-alt text-danger">
              {errors.price.message}
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            placeholder="Select a category"
            className="form-select mb-3"
            {...register("category", {
              required: {
                value: true,
                message: "Category is Required",
              },
            })}
            value={selectedCategoryId || selectedProduct?.category?.id}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            {/* show all categories from categoryData */}
            {categoryData?.category?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          {errors.category?.type === "required" && (
            <span className="label-text-alt text-danger">
              {errors.category.message}
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("description", {
              required: {
                value: true,
                message: "description is Required",
              },
            })}
          />
          {errors.description?.type === "required" && (
            <span className="label-text-alt text-danger">
              {errors.description.message}
            </span>
          )}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose Image</Form.Label>
          <Form.Control
            type="file"
            {...register("photo", {
              required: {
                value: true,
                message: "photo is Required",
              },
            })}
            accept="image/*"
          />
          {errors.photo?.type === "required" && (
            <span className="label-text-alt text-danger">
              {errors.photo.message}
            </span>
          )}
        </Form.Group>
        <Button variant="light" type="submit">
          Update Product
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProductDetails;
