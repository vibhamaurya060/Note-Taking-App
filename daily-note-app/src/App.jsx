import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./index.css";
import dayjs from "dayjs";

const App = () => {
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage when the component mounts
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [showNoteForm, setShowNoteForm] = useState(false);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (content) => {
    const newNote = {
      id: dayjs().format("YYYYMMDDHHmmss"), // Unique ID
      content,
      date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    };
    setNotes([newNote, ...notes]);
    setShowNoteForm(false);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, content) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  return (
    <div className="app-container">
      <Sidebar setShowNoteForm={setShowNoteForm} />
      <div className="main-content">
        <h1>Your Notes</h1>
        {showNoteForm && <NoteForm addNote={addNote} />}
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      </div>
    </div>
  );
};

export default App;
