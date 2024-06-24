import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import auth from "../appwrite/auth";
import { useForm } from "react-hook-form";

const SignupComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    try {
      const newUser = await auth.createAccount(data);
      if (newUser) {
        const userData = await auth.getUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.massage);
    }
  };
  return (
    <div>
      <div>
        <div>Logo</div>
        <h2>Sign up to your account</h2>
        <p>
          already have an account? <Link to="/login">Login</Link>
        </p>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(signup)}>
          <div>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
              })}
            />
            <Input
              label="Password: "
              placeholder="Enter your password"
              type="password"
              {...register("passwrod", {
                required: true,
              })}
            />
            <Input
              label="Name: "
              placeholder="Enter your name"
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
