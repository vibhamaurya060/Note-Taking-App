import React, { useState } from "react";
import "./NoteItem.css"; 

const NoteItem = ({ note, deleteNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    updateNote(note.id, content);
    setIsEditing(false);
  };

  return (
    <li className="note-item">
      {isEditing ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleUpdate}
          rows="3"
          className="note-textarea"
        />
      ) : (
        <p className="note-content">{note.content}</p>
      )}
      <div className="note-actions">
        <button onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </li>
  );
};

export default NoteItem;
