import React from "react";
import { BsJournalPlus } from "react-icons/bs"; 
import "../index.css";

const Sidebar = ({ setShowNoteForm }) => {
  return (
    <div className="sidebar">
      <div
        className="sidebar-item"
        onClick={() => setShowNoteForm((prev) => !prev)}
      >
        <BsJournalPlus className="sidebar-icon" />
        <span>Add Note</span>
      </div>
    </div>
  );
};

export default Sidebar;
