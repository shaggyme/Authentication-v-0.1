import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [SignupData, setSignupData] = useState({
    username: "",
    password: "",
  });

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        SignupData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setSignupData({
      username: "",
      password: "",
    });
  };

  const handleSignupChange = async (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Sign-Up</h1>
      <form action="" onSubmit={handleSignUpSubmit}>
        <input
          type="text"
          name="username"
          value={SignupData.username}
          placeholder="Username"
          required
          onChange={handleSignupChange}
        />
        <input
          type="password"
          name="password"
          value={SignupData.password}
          placeholder="Password"
          required
          onChange={handleSignupChange}
        />
        <button type="submit">SignUp</button>
        <p>
          Already Registered <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
