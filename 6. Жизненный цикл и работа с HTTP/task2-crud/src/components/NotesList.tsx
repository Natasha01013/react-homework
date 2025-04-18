import React from "react";
import { Note } from "../types/types";

interface NotesListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

//Принимает список заметок (notes) как пропс
//Отображает каждую заметку в виде карточки
//Позволяет удалить любую заметку через onDelete с нужным id
const NotesList: React.FC<NotesListProps> = ({ notes, onDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <p>{note.content}</p>
          <button onClick={() => onDelete(note.id)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;