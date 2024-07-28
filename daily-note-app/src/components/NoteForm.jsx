import React, { useState } from "react";
import "./NoteForm.css"; 

const NoteForm = ({ addNote }) => {
  const [noteContent, setNoteContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteContent.trim()) {
      addNote(noteContent);
      setNoteContent("");
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your note here..."
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        rows="12"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
