import React from "react"

export default function Note({note , onDragStart, onEdit }){
    return (
        <>
        <div
        className="p-3 mb-2 bg-blue-100 rounded cursor-grab"
        draggable
        onDragStart={(e) => onDragStart(e, note.id)}
        >
            {note.text}
        </div>
        <button
            className="p-1 m-1 bg-blue-800 rounded cursor-pointer text-white ml-3 px-20"
            onClick={() => onEdit(note.id, note.text)}
        >
            Edytuj
        </button>
        </>
    )
}