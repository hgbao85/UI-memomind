import React, { useState } from 'react';

const NoteForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle note submission (e.g., dispatch action or API call)
    console.log('New Note:', content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="note">Ghi chú mới</label>
        <input
          type="text"
          className="form-control"
          id="note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Thêm ghi chú</button>
    </form>
  );
};

export default NoteForm;
