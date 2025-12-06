import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-600 flex items-center justify-center">
      <div className="text-center text-white space-y-4">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="text-xl">Please login or signup to continue</p>
        <div className="space-x-4 mt-4">
          <Link
            to="/login"
            className="bg-white text-green-600 font-semibold py-2 px-4 rounded hover:bg-green-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-green-600 font-semibold py-2 px-4 rounded hover:bg-green-100 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
