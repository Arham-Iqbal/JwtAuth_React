import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { toast } from 'react-hot-toast';

const Login = ({ setisloggin, setusername }) => {
  let [formdata, setformdata] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function changehandler(event) {
    const { name, value } = event.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function submithandler(event) {
    if (formdata.username && formdata.password) {
      event.preventDefault();
      const token = Math.random().toString(36).substr(2);
      localStorage.setItem('jwtToken', token);
      setisloggin(true);
      setusername(formdata.username);
      console.log(token);
      toast.success("Login successful");
      navigate("/Dashboard");
      console.log(formdata);
    } else {
      toast.error("Login failed");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={submithandler}>
          <div className="mb-4">
            <label htmlFor="user" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              id="user"
              type="text"
              name="username"
              placeholder="Username"
              onChange={changehandler}
              value={formdata.username}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pass" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Password"
              onChange={changehandler}
              value={formdata.password}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
