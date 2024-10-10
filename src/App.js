import "./App.css";
import Signup from "./Signup";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Toaster } from 'react-hot-toast';
import { NavLink, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  let [isloggedin, setisloggin] = useState(false);
  let [username, setusername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setisloggin(true);
      setusername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="bg-white shadow-md">
        <ul className="flex justify-between items-center p-4">
          <li className="text-lg font-bold text-blue-600">
            <NavLink to="/">My App</NavLink>
          </li>
          <div className="flex items-center space-x-4">
            {isloggedin ? (
              <>
                <li>
                  <NavLink to="/Dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</NavLink>
                </li>
                <li className="text-gray-700">Welcome, {username}</li>
                <li>
                  <NavLink to="/Login" className="text-gray-700 hover:text-blue-600">Logout</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/Login" className="text-gray-700 hover:text-blue-600">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/Signup" className="text-gray-700 hover:text-blue-600">Signup</NavLink>
   
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
      <div className="py-8">
        <Routes>
          <Route path="/Login" element={<div><Login setisloggin={setisloggin} setusername={setusername} /></div>} />
          <Route path="/Signup" element={<div><Signup /></div>} />
          <Route path="/Dashboard" element={<div><Dashboard setisloggin={setisloggin} setusername={setusername} /></div>} />
          <Route path="/ProtectedRoutes" element={<div><ProtectedRoutes /></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
