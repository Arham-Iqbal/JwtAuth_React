import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Signup = () => {
  let [formdata, setformdata] = useState({ user: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  function changehandler(event) {
    const { name, value } = event.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function submithandler(event) {
    event.preventDefault(); // Prevent form submission
    if (formdata.password === formdata.cpassword) {
      if (formdata.user && formdata.password && formdata.cpassword) {
        toast.success("Signup Successful");
        navigate("/Login");
        console.log(formdata);
      } else {
        toast.error("Signup Failed: Please fill in all fields");
      }
    } else {
      toast.error("Passwords don't match");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={submithandler}>
          <div className="mb-4">
            <label htmlFor="Username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              name="user"
              onChange={changehandler}
              value={formdata.user}
              placeholder="Username"
              type="text"
              id="Username"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              name="password"
              onChange={changehandler}
              value={formdata.password}
              placeholder="Password"
              type="password"
              id="Password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="CPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              name="cpassword"
              onChange={changehandler}
              value={formdata.cpassword}
              placeholder="Confirm Password"
              type="password"
              id="CPassword"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 transition duration-200"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
