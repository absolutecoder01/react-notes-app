import { userState, useState } from "react";
import { categories as initialCategories, notes as initialNotes } from "./data";
import Category from "./Category";
import './App.css';

export default function App() {
    const [notes, setNotes] = useState(initialNotes);

    const onDragStart = (e, noteId) => {
        e.dataTransfer.setData("noteId", noteId);
    }

    const onDrop = (noteId, newCategoryId) => {
            setNotes((prev) =>
            prev.map((note) =>
            note.id === Number(noteId) ? { ...note, categoryId: newCategoryId } : note
            )
        );
    };

    const addNote = (categoryId) => {
        const text = prompt("Tresc notatki: ");
        if (!text) return;
        const newNote = {
            id: Date.now(),
            text,
            categoryId
        };
        setNotes((prev) => [...prev, newNote]);
    };

    const editNote = (noteId, currentText) => {
        const newText = prompt("Edytuj notatkę: ", currentText);
        if (!newText) return;
        setNotes((prev) => prev.map(note => 
            note.id === noteId ? { ...note, text: newText } : note
        )
        );
    };
    const deleteNote = (noteId) => {
        setNotes(prev => prev.filter(note => note.id !== noteId))
    }
    return (
        <div
            className="p-8 flex"
        >
            {initialCategories.map((cat) => (
                <div key={cat.id}>
                    <button
                        className="mb-2 p-1 bg-blue-400 rounded text-white"
                        onClick={() => addNote(cat.id)}>
                            + Dodaj
                    </button>
                    <Category
                    category={cat}
                    notes={notes.filter((n) => n.categoryId === cat.id)}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    editNote={editNote}
                    deleteNote={deleteNote}
                    />
                </div>
            ))}
        </div>
    );
}