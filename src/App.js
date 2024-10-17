import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import './App.css'; // Import file CSS để tùy chỉnh giao diện

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Ghi chú 1', content: 'Nội dung ghi chú 1' },
    { id: 2, title: 'Ghi chú 2', content: 'Nội dung ghi chú 2' },
    { id: 3, title: 'Ghi chú 3', content: 'Nội dung ghi chú 3' },
  ]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  // Thông báo xóa với các nút hành động
  const handleDeleteNote = (noteId) => {
    const noteToDelete = notes.find(note => note.id === noteId);
  
    const toastId = toast.info(
      <div>
        Bạn có chắc chắn muốn xóa ghi chú "<strong>{noteToDelete.title}</strong>" không?
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={() => confirmDelete(noteId, toastId)} 
            style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
            Xóa
          </button>
          <button 
            onClick={() => cancelDelete(toastId)} 
            style={{ padding: '5px 10px', backgroundColor: 'gray', color: 'white', border: 'none', cursor: 'pointer' }}>
            Hủy
          </button>
        </div>
      </div>, 
      {
        position: "top-center",
        autoClose: false, // Giữ thông báo mở cho đến khi người dùng hành động
        closeOnClick: false,
        closeButton: false,
        icon: false,
        className: 'toastify-center' // Đảm bảo thông báo nằm ở giữa màn hình
      }
    );
  };

  // Xác nhận xóa
  const confirmDelete = (noteId, toastId) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNote && selectedNote.id === noteId) {
        setSelectedNote(null);
    }

    // Đóng thông báo xác nhận xóa
    toast.dismiss(toastId);

    // Hiển thị thông báo xóa thành công sau khi thông báo xác nhận biến mất
    setTimeout(() => {
        toast.success(
            <div>
                Ghi chú đã được xóa thành công!
                <div style={{ marginTop: '10px' }}>
                    <button 
                        onClick={() => toast.dismiss()} 
                        style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
                        OK
                    </button>
                </div>
            </div>, 
            {
                position: "top-center",
                autoClose: false,
                closeOnClick: false,
                closeButton: false,
                icon: false,
                className: 'toastify-center' // Hiển thị ở trung tâm màn hình với animation
            }
        );
    }, 300); // Thời gian delay (300ms) có thể điều chỉnh
};

  
  

  // Hủy xóa
  const cancelDelete = (toastId) => {
    // Đóng thông báo xác nhận
    toast.dismiss(toastId);
  };

  const handleSaveNote = (noteId, content) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, content } : note
    ));
    setSelectedNote({ ...selectedNote, content });
  
    // Hiển thị thông báo lưu thành công với nút OK và không có nút X
    const toastId = toast.success(
      <div>
        Ghi chú đã được lưu thành công!
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={() => toast.dismiss(toastId)} 
            style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
            OK
          </button>
        </div>
      </div>, 
      {
        position: "top-center",
        autoClose: false, // Giữ mở cho đến khi nhấn OK
        closeOnClick: false, // Không đóng khi nhấn ra ngoài
        closeButton: false, // Ẩn nút X
        icon: false, // Loại bỏ biểu tượng dấu tick
      }
    );
  };
  
  

  return (
    <div className="app-container">
      <ToastContainer />
      <div className="sidebar">
        <h2>Danh sách ghi chú</h2>
        <NoteList notes={notes} onSelectNote={handleSelectNote} onDeleteNote={handleDeleteNote} />
      </div>
      <div className="editor">
        <h2>Ghi chú</h2>
        {selectedNote ? (
          <NoteEditor selectedNote={selectedNote} onSaveNote={handleSaveNote} />
        ) : (
          <p>Chọn một ghi chú để chỉnh sửa.</p>
        )}
      </div>
    </div>
  );
};

export default App;
