import React from 'react';

const NoteList = ({ notes, onSelectNote, onDeleteNote }) => {
  return (
    <ul className="note-list list-group">
      {notes.map(note => (
        <li key={note.id} className="list-group-item d-flex justify-content-between align-items-center">
          <span onClick={() => onSelectNote(note)} style={{ cursor: 'pointer' }}>
            {note.title}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => onDeleteNote(note.id)}>
            Xóa
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
