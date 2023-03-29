import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./utils.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../feature/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { token, isError, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // Marazulislam021@gmail.com
  // Farhana@@@@88191
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = async (data) => {
    dispatch(loginAdmin(data));
  };
  //
  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate, isError, error]);
  //
  return (
    <div className="main-login-div">
      <div className="login-div">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-div">
          {/* <Link to="/dashboard">dashboard</Link> */}
          <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              size="lg"
              placeholder="Enter email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-danger">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-danger">
                {errors.email.message}
              </span>
            )}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 w-full" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              size="lg"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 character or longer",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-danger">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
