import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;
      if (success) {
        console.log("Login Successfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Login error", error);
    }
    setLoginData({
      username: "",
      password: "",
    });
  };

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          value={loginData.username}
          placeholder="Username"
          required
          onChange={handleLoginChange}
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          placeholder="Password"
          required
          onChange={handleLoginChange}
        />
        <button type="submit">Login</button>
        <p>
          Not Registered yet <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
