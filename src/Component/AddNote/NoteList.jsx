
import React from "react";
import Note from "./Note";

const NoteList = React.memo(function NoteList({ notes ,ondelet,onfinish}) {
  return (
    <div>
     {notes == "" ? <h1 className="text-2xl">Your Note List Is Empty</h1> : null}
      {notes.map((item) => (
        <Note key={item.id} data={item} ondelet={ondelet} onfinish={onfinish} />
      ))}
    </div>
  );
})
export default NoteList;
