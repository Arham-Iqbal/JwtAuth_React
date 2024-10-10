import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setisloggin, setusername }) => {
  const navigate = useNavigate();

  function clickhandler() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");
    setisloggin(false);
    setusername("");
    navigate("/Login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </header>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome to your dashboard!</h2>
        <p className="text-gray-600 mb-6">Here you can manage your account and settings.</p>
        <button
          onClick={clickhandler}
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
