// import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, setToken, navigation, backend_url } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email, password);
      if (currentState === "Sign Up") {
        const response = await axios.post(backend_url + "/api/user/signup", {
          name,
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backend_url + "/api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigation("/");
    }
  }, [token]);
  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 "
      onSubmit={submitHandler}
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"></hr>
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full border py-2 px-3 rounded-md outline-none text-gray-800 border-black "
          placeholder="Enter Your Name"
        ></input>
      )}
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full border py-2 px-3 rounded-md outline-none text-gray-800 border-black "
        placeholder="Enter Your Email"
      ></input>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full border py-2 px-3 rounded-md outline-none text-gray-800 border-black "
        placeholder="Enter Your Password"
      ></input>
      <div className="flex items-center justify-between w-full text-sm mt-[-8px]">
        <p>Forget Your Password ?</p>
        <p
          className="cursor-pointer hover:front-semibold"
          onClick={() => {
            currentState === "Sign Up"
              ? setCurrentState("Login")
              : setCurrentState("Sign Up");
          }}
        >
          {currentState === "Sign Up" ? "Login Here" : "Create Account"}
        </p>
      </div>
      <button type="submit" className="border text-white py-2 px-8  bg-black">
        Submit
      </button>
    </form>
  );
};

export default Login;
