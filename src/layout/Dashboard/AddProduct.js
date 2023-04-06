import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../feature/product/productSlice";
import { toast } from "react-hot-toast";
import { useGetAllCategoryQuery } from "../../feature/category/categoryApi";
import "./OrderDetails.css";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();
  const { data } = useGetAllCategoryQuery();
  console.log("data", data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = async (formDa) => {
    try {
      toast.dismiss(); // Dismiss the previous toast
      toast.loading("Adding product"); // Show a loading message
      const { data } = await addProduct(formDa);
      if (data.success) {
        toast.dismiss(); // Dismiss the loading toast
        toast.success("Product added successfully");
      }
    } catch (e) {
      toast.dismiss(); // Dismiss the loading toast
      toast.error(e.message || "Failed to add product");
    }
  };
  return (
    <div>
      <Form className="formm" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Product Name</Form.Label>
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
          <Form.Label className="fs-4">Product Price</Form.Label>
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
          <Form.Label className="fs-4">Catagory</Form.Label>
          <Form.Select
            name="category"
            placeholder="Select a category"
            className="form-select mb-3"
            {...register("category", {
              required: {
                value: true,
                message: "category is Required",
              },
            })}
          >
            {data?.category?.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
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
          <Form.Label className="fs-4">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            cols={3}
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
          <Form.Label className="fs-4">Choose Image</Form.Label>
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
        <Button className="fs-4" variant="outline-dark" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
