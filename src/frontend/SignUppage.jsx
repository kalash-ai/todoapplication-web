import React from "react";

export default function SignUppage() {
  return (
    <>
  
 
      <div className="flex justify-center h-16 w-auto relative">
        <div className="text-5xl font-bold">WELCOME</div>
      </div>
            <div className="scroll-mx-96 h-1 w-20 bg-cyan-400"></div>


      {/* Centered DIV */}
      <div className="flex justify-center items-center h-full">
       
        <div className="h-4/5 w-80 border border-solid border-black my-14 rounded-2xl ">
       
          <div>
            <div className="text-2xl font-bold flex items-center justify-center my-5  flex-col">
              SIGN UP
            <div className="h-1 w-20 bg-cyan-400 "></div>
            </div>


            {/* <div id="inputboxes" className="flex justify-center items-center">

            </div> */}
            <label className="block text-sm font-medium text-gray-700 mx-14">Name</label>
        <input
          type="text"
          className="  mx-10 mt-1 p-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-orange-300 shadow-md hover:shadow-lg"
          placeholder="Enter your Full Name"
        />
            <label className="block text-sm font-medium text-gray-700 mx-14">Username</label>
        <input
          type="text"
          className="  mx-10 mt-1 p-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-orange-300 shadow-md hover:shadow-lg"
          placeholder="Enter your username"
        />
            <label className="block text-sm font-medium text-gray-700 mx-14">Email Address</label>
        <input
          type="email"
          className="  mx-10 mt-1 p-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-orange-300 shadow-md hover:shadow-lg"
          placeholder="Enter your email"
        />
            <label className="block text-sm font-medium text-gray-700 mx-14">Password</label>
        <input
          type="password"
          className="  mx-10 mt-1 p-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-orange-300 shadow-md hover:shadow-lg"
          placeholder="Enter your Password"
        />


          </div>
          <button className="h-14 w-20 mx-32 border border-solid border-black hover:bg-blue-500 text-white bg-blue-400 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300">
    Sign Up
  </button>
 


        </div>
      </div>
      
    </>
  );
}
