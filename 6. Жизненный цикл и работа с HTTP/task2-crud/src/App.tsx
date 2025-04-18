import React, { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import { Note } from "./types/types";

import './App.css';

const API_URL = "http://localhost:7070/notes";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  //запрашивает список заметок с сервера и обновляет состояние на фронтенде
  const fetchNotes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("Полученные заметки:", data); 
      setNotes(data);
    } catch (error) {
      console.error("Ошибка при загрузке заметок:", error);
    }
  };

  //отправляет новую заметку на сервер и потом обновляет список
  const addNote = async (content: string) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 0, content }),
    });
    fetchNotes();
  };

  // удаляет заметку с сервера по её id
  const deleteNote = async (id: number) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchNotes();
  };

  //Выполним fetchNotes() один раз при монтировании компонента
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container">
      <h1>Notes</h1>
      <NoteForm onAdd={addNote} />
      <button onClick={fetchNotes}>🔄 Обновить</button>
      <NotesList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;