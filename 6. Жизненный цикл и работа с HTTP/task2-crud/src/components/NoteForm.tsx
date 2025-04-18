import React, { useState } from "react";

interface NoteFormProps {
  //функция, которую NoteForm вызывает при отправке формы. onAdd передаёт текст заметки (content), 
  // и дальше родитель отправляет POST-запрос
  onAdd: (content: string) => void;
}

// форма для добавления новой заметки
const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите заметку"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default NoteForm;