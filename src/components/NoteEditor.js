import React, { useEffect, useState } from 'react';

const NoteEditor = ({ selectedNote, onSaveNote }) => {
  const [content, setContent] = useState('');

  // Cập nhật nội dung khi ghi chú được chọn
  useEffect(() => {
    if (selectedNote) {
      setContent(selectedNote.content);
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveNote(selectedNote.id, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nhập ghi chú ở đây..."
        required
      />
      <button type="submit" className="btn btn-primary mt-2">Lưu ghi chú</button>
    </form>
  );
};

export default NoteEditor;
