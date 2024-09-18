import React from "react";
function Note({ data,ondelet,onfinish }) {
  return (
    <div className="grid grid-cols-4 ">
      <div className="bg-black p-6 h-fit flex ">
        <div className=" bg-gray-500 shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">{data.Title}</h1>
          <p
            className="w-full bg-white h-96 p-4 border font-bold border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            rows="15"
            placeholder=""
          >
            {data.Description}
          </p>
          <div className=" mt-4 flex gap-2 justify-end">
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700">
              {data.createdTime}
            </button>
            <button onClick={()=> onfinish(data.id)} className= {data.isFinshed ? "opacity-95 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center" : "opacity-35 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"} >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              Star Button
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <button onClick={()=> ondelet(data.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 2a1 1 0 00-1 1v1H3a1 1 0 000 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm3 4a1 1 0 012 0v8a1 1 0 01-2 0V6zm4 0a1 1 0 012 0v8a1 1 0 01-2 0V6zM7 6a1 1 0 012 0v8a1 1 0 01-2 0V6z" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Note;
