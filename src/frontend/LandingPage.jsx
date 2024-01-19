import { useState } from "react";
import "../App.css";

function App() {
  const [todo, settodo] = useState("todo");
  const [description, setdescription] = useState("");
  const addingTodo = (event) => {
   
    settodo(event.target.value);
  };
  const addingDescription = (event) => {
    
    setdescription(event.target.value);
  };
  const addingtodo =async()=>{
    User.todo.push(todo)
    User.todo.push(description)
  }
  return (
    <>
    {/* <LandingPage/> */}
      <div className="flex justify-center border-solid border-black-200 border">
        <h1 className=" text-5xl font-bold ">Today's Task</h1>
      </div>

      <div className="flex flex-col justify-center items-center my-10 ">
        <input
          type="text"
          className="h-10 w-96 mb-4 border-2 border-solid border-black-200 rounded-lg my-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
          id="input1"
          value={todo}
          onChange={addingTodo}
          placeholder="Enter Today's Task"
        />
        <input
          type="text"
          placeholder="Enter TODO Description"
          className="h-10 w-96 mb-4 border-2 border-solid border-black-200 rounded-lg my-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
          value={description}
          onChange={addingDescription}
        />
        <button
          type="button"
          className="btn btn-outline-primary mt-3 px-4 py-2 border border-solid border-blue-500 rounded-md hover:bg-blue-600" onClick={addingtodo}
        >
          Add
        </button>
      </div>

      {/* // Rendering Part */}

      {/* TOP BAR */}
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold ">Today's Task</h1>
      </div>






      {/* MAIN RENDERING SECTION */}

      <div className="form-check mt-3 flex justify-center items-center">
        <input type="checkbox" className="hidden" id="flexCheckIndeterminate" />

        <label
          htmlFor="flexCheckIndeterminate"
          className="flex items-center ml-2 cursor-pointer"
        >
          <div className="relative">
            <div className="w-6 h-6 bg-white border border-gray-400 rounded-md cursor-pointer flex items-center justify-center my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-green-500 hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h14a2 2 0 110 4H4a2 2 0 01-2-2zm0 6a2 2 0 012-2h14a2 2 0 110 4H4a2 2 0 01-2-2zm2 4a2 2 0 100 4h14a2 2 0 100-4H4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="checkbox"
              className="absolute opacity-0 w-0 h-0"
              id="flexCheckIndeterminate"
            />
          </div>

          <div>
            <span className="text-base ml-2">{todo}</span>
            <p className="text-gray-500 text-2xl font-medium">{description}</p>
          </div>
        </label>
      </div>
    </>
  );
}

export default App;


