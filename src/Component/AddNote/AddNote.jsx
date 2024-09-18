import React, { useState } from "react";

function AddNote({ onAddNote }) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      Title,
      Description,
      id: Date.now(),
      createdTime: new Date().toISOString(),
    };

    

    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mb-52 ">
      <div className="justify-center items-center flex ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 p-4 items-center justify-center shadow-md rounded-lg w-72 mt-52 bg-gray-800"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-white text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded-md w-70px focus:border-blue-500 focus:ring-2 h-10 focus:ring-blue-200"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block  text-white text-sm font-bold mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded-md w-70 focus:border-blue-500 focus:ring-2 h-10 focus:ring-blue-200"
              placeholder="Enter description"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-64 px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
