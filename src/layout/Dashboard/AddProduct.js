import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../feature/product/productSlice";
import { toast } from "react-hot-toast";
import { useGetAllCategoryQuery } from "../../feature/category/categoryApi";

const AddProduct = () => {
  const [addProduct, { isError, isLoading, error }] = useAddProductMutation();
  const { data } = useGetAllCategoryQuery();
  console.log("data", data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = async (formDa) => {
    console.log("addProduct", formDa.category);
    const { data } = await addProduct(formDa);
    console.log("da", data);
    if (data.success) {
      toast.success("Product added successfully ");
    }
    if (isError) {
      toast.error(error);
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Catagory</Form.Label>
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
        </Form.Group>
        <Button variant="light" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
