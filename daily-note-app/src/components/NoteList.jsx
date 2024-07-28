import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote, updateNote }) => {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </ul>
  );
};

export default NoteList;
