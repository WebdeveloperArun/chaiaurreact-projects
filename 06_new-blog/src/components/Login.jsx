import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import auth from "../appwrite/auth";
import { useForm } from "react-hook-form";

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    console.log("login hook form data: ", data);
    setError("");
    try {
      const session = await auth.login({...data});
      if (session) {
        const userData = await auth.getUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <div className="text-3xl font-bold">Do-Blog</div>
          <h2 className="text-2xl mt-2">Sign in to your account</h2>
          <p className="text-gray-400 mt-1">
            Don't have any account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <div className="space-y-4">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", { required: true })}
              className="w-full"
            />
            <Input
              label="Password: "
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: true })}
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
