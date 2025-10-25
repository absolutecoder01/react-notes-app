import React from "react";
import Note from "./Note";

export default function Category({ category, notes, onDragStart, onDrop, editNote }){
    const handleDrop = (e) => {
        e.preventDefault();
        const noteId = e.dataTransfer.getData("noteId");
        onDrop(noteId, category.id);
    };

    return (
        <div
            className="w-64 p-4 bg-blue-400 rounded mr-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <h2
            className="font-bold mb-2"
            >
                {category.name}
            </h2>
            {notes.map((note) => (
                <Note 
                key={note.id} 
                note={note} 
                onDragStart={onDragStart} 
                onEdit={editNote}/>
            ))}
        </div>
    );
}