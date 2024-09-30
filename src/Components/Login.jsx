import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Form, Input, Button, message, Segmented } from "antd";
import { Button, Checkbox, Input, Password, Text, Title } from "rizzui";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userAuth } from "../middleware/userAuth";
import { toast } from "react-toastify";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await userAuth();
      if (isAuthenticated) {
        setIsAuthenticated(true); // Set authenticated state
        navigate("/profile", { replace: true }); // Redirect to profile if authenticated
      }
    };
    checkAuth();
  }, [navigate]);

  // Login handler
  const handleLogin = async (values) => {
    setLoading(true); // Set loading state to true
    try {
      const { data } = await axios.post("https://dummyjson.com/auth/login", {
        username: values.username,
        password: values.password,
      });

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success("Login Successful!", {
          position: "top-center",
          autoClose: 3000, // Toast will close automatically after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }); // Display success message
        setIsAuthenticated(true);
        navigate("/profile", { replace: true }); // Redirect to profile on successful login
      } else {
        toast.error("Login Failed! No token received.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login Failed! Please check your credentials.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Return the form only if the user is not authenticated
  if (isAuthenticated) {
    return null; // Or a loading spinner / redirect message can be displayed here
  }

  return (
    <section className="bg-gradient-to-t from-[#3C4459] to-[#61898E]">
      <div className=" relative grid grid-cols-12  h-screen  ">
        <div className=" flex flex-col col-span-6 h-full justify-between    px-5 pt-10 md:pb-[50px] sm:pb-[25px] pb-[15px] text-red font-bold">
          <h1 className="text-3xl mb-5 pb-5 text-white">Code Grass</h1>
          <div className="w-1/2 text-center">
            <p className="text-[#94DCA4]  text-2xl leading-10 mb-2">
              Welcome to Code Grass! Please login to continue.
            </p>
            <button className="bg-gradient-to-r from-[#33696A] to-[#75D484] px-3 py-2  text-white rounded-full text-center">
              know more
            </button>
          </div>
        </div>
        <div className=" flex flex-col col-span-6 items-center justify-center  h-full   text-red font-bold  bg-gradient-to-t from-[#75D484] to-[#33696A]">
          <h1 className="text-3xl mb-5 pb-5">Login</h1>
          <div className="sm:px-20 px-5 bg-transparent py-10 rounded-lg max-w-[400px]">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="space-y-5 lg:space-y-6">
                <Input
                  type="input"
                  size="xl"
                  // label="Email"
                  // defaultValue={"test"}
                  placeholder="Enter your email"
                  inputClassName="[&.is-focus]:ring-[0px] [&.is-focus]:border-b"
                  className="[&>label>span]:font-medium [&>label>span]:text-white [&>label>span]:border-b-2  [&>label>span]:ring-[0px] [&>label>span]:border-t-0 [&>label>span]:border-l-0 [&>label>span]:border-r-0 [&>label>span]:[&.is-focus]:ring-[0px]"
                  {...register("username", { required: "Email is required" })}
                  error={errors.username?.message} // Updated to match the registered field
                />

                <Password
                  // label="Password"
                  placeholder="Enter your password"
                  // defaultValue={"123456"}
                  size="xl"
                  inputClassName="[&.is-focus]:ring-[0px] [&.is-focus]:border-b"
                  className="[&>label>span]:font-medium [&>label>span]:text-white [&>label>span]:border-b-2  [&>label>span]:ring-[0px] [&>label>span]:border-t-0 [&>label>span]:border-l-0 [&>label>span]:border-r-0 [&>label>span]:[&.is-focus]:ring-[0px] [&>label>span]:[&.is-focus]:border-0 "
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={errors.password?.message}
                />
                <div className="flex items-center justify-between pb-1">
                  <Checkbox
                    {...register("rememberMe")}
                    label="Remember Me"
                    className="[&>label>span]:font-medium [&>label>span]:text-white "
                  />
                  {/* <Link
                                        to="/forgot-password"
                                        className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
                                    >
                                        Forgot Password?
                                    </Link> */}
                </div>

                <Button
                  className="w-full bg-slate-50 text-black"
                  type="submit"
                  size="xl"
                >
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <Form name="login" layout="vertical" onFinish={handleLogin}>
              <Form.Item
                // label="name"
                className=""
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                  {
                    min: 3,
                    message: "Username must be at least 3 characters long!",
                  },
                  {
                    whitespace: true,
                    message: "Username cannot start or end with a space!",
                  },
                ]}
              >
                <Input className="w-full px-3 py-2 bg-transparent border-b rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </Form.Item>
              <Form.Item
                // label="password"
                name="existingPassword"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters long!",
                  },
                  {
                    // Add your pattern here if needed
                    message:
                      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character!",
                  },
                ]}
              >
                <Input.Password className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </Button>
              </Form.Item>
            </Form> */
}
