import { useState } from "react";
import "./App.css";
import AddNote from "./Component/AddNote/AddNote";
import NoteList from "./Component/AddNote/NoteList";

function App() {

  // Render Test 
  // const [count,setcount] = useState(0)

  // console.log("App Rerender")

  // setInterval(()=>{
  //   setcount(prevcount => prevcount + 1)
  // },2000)

  const [notes, setNote] = useState(() => {
    if (localStorage.getItem('notes')) {
      return JSON.parse(localStorage.getItem('notes'))
    }
    else {
      return []
    }
  });
  localStorage.setItem('notes', JSON.stringify(notes))
  const addNoteHanlder = (newNote) => {
    setNote((prevNotes) => [...prevNotes, newNote])
    localStorage.setItem('notes', JSON.stringify(notes))
  };

  const delethandler = (id) => {
    const newNote = notes.filter((note) =>
      note.id !== id);

    setNote(newNote)

  }

  const FinishHandler = (id) => {
    const newNote = notes.map((note)=>
     note.id === id ? {...note,isFinshed : !note.isFinshed} :note
    );
    setNote(newNote)
  }



  return (
    <div className="bg-black">
      <AddNote setNote={setNote} onAddNote={addNoteHanlder} />;
      <NoteList notes={notes} ondelet={delethandler} onfinish={FinishHandler} />
    </div>)
}
export default App;
