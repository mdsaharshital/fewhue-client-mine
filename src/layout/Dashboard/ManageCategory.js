import React, { useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import "./OrderDetails.css";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} from "../../feature/category/categoryApi";
import UpdateCategoryModal from "./Comp/UpdateCategory";

// {
//   categoriesWithImages?.map(category=><figure className="gallery__item">
//   <div className="gallery__item-img">
//       <div className="gallery__item-imginner skew">
//           <img className="w-100" src={category.img} alt="" />
//       </div>
//   </div>
//   <figcaption className="gallery__item-caption ">
//       <h2 className="gallery__item-title " data-scroll data-scroll-speed="1">{category.name}</h2>
//   </figcaption>
// </figure>)
// }

const ManageCategory = () => {
  const [getCategory, setGetCategory] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const { data } = useGetAllCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [postCategory] = useAddCategoryMutation();
  console.log("krieee", data);
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      toast.dismiss();
      toast.loading("Deleting category");
      deleteCategory(id).finally(() => {
        toast.dismiss();
        toast.success("Deleted successfully");
      });
    }
  };
  const handleAddCategory = async () => {
    toast.dismiss();
    toast.loading("Adding Category");
    try {
      const { data } = await postCategory(getCategory);
      if (data.success) {
        toast.dismiss();
        toast.success("Category added successfully");
      } else {
        toast.dismiss();
        toast.error("Failed to add category1");
      }
    } catch (error) {
      console.log("error", error);
      toast.dismiss();
      toast.error("Failed to add category2");
    }
  };

  return (
    <div>
      <h2 className="text-center my-5">Manage Categories</h2>
      <Table striped borderless hover responsive>
        <thead>
          <tr>
            <th className="fs-4">#</th>
            <th className="fs-4">Category Name</th>
            <th className="fs-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.category?.map((c, index) => (
            <tr key={c._id}>
              <td className="fs-4">{index + 1}</td>
              <td className="fs-4">{c.name}</td>
              <td className="fs-4">
                <span
                  onClick={() => {
                    setGetCategory(c);
                    setModalShow(true);
                  }}
                  className="fs-6 mx-2 btn btn-outline-dark btn-sm"
                >
                  Edit
                </span>
                <UpdateCategoryModal
                  show={modalShow}
                  category={getCategory}
                  onHide={() => setModalShow(false)}
                />
                <Button
                  variant="outline-danger"
                  className="fs-6"
                  onClick={() => handleDelete(c._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <InputGroup className="my-3 p-2">
        <Form.Control
          className="py-3"
          placeholder="Category name"
          aria-label="Category name"
          aria-describedby="basic-addon2"
          onBlur={(e) => setGetCategory(e.target.value)}
          required
        />
        <Button variant="dark" className="px-5" onClick={handleAddCategory}>
          Add
        </Button>
      </InputGroup>
    </div>
  );
};

export default ManageCategory;
