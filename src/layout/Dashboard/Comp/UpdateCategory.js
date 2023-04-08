import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useUpdateCategoryMutation } from "../../../feature/category/categoryApi";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function UpdateCategoryModal(props) {
  const [getCategory, setGetCategory] = useState("");
  const [updateCategory] = useUpdateCategoryMutation();
  console.log("prop", props);
  const {
    category: { _id, name },
    onHide,
  } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateCategory({ id: _id, name: getCategory });
      if (data.success) {
        toast.dismiss();
        onHide();
        toast.success("Category updated successfully");
      } else {
        toast.dismiss();
        toast.error("Failed to update category");
      }
    } catch (error) {
      console.log("error", error);
      toast.dismiss();
      toast.error("Failed to update category");
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Previous name: {name}</h4>
        <Container className="d-flex flex-column align-items-center">
          <h1 className="mb-4 fs-2 my-2">Edit your category name</h1>
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={getCategory}
                onChange={(e) => setGetCategory(e.target.value)}
                className="p-3"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 btn-lg">
              Update
            </Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
