import React from "react"

export default function Note({note , onDragStart, onEdit, onDelete}){
    return (
        <>
        <div
        className="p-3 mb-2 bg-blue-100 rounded cursor-grab"
        draggable
        onDragStart={(e) => onDragStart(e, note.id)}
        >
            {note.text}

        <button
            className="p-1 m-1 bg-blue-800 rounded cursor-pointer text-white px-10"
            onClick={() => onEdit(note.id, note.text)}
        >
            Edytuj
        </button>
        <button
            className="p-1 m-1 bg-red-800 rounded cursor-pointer text-white px-10"
            onClick={() => onDelete(note.id)}
        >Usun </button>
        </div>

        </>
    )
}