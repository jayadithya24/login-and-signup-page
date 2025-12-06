import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-green-600 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome to the Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100 transition">
          Profile
        </button>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100 transition">
          Settings
        </button>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100 transition">
          Messages
        </button>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100 transition">
          Notifications
        </button>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100 transition">
          Reports
        </button>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100 transition">
          Logout
        </button>
      </div>
    </div>
  );
}
