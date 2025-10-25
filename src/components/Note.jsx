import React from "react"

export default function Note({note , onDragStart }){
    return (
        <>
        <div
        className="p-3 mb-2 bg-blue-100 rounded cursor-grab"
        draggable
        onDragStart={(e) => onDragStart(e, note.id)}
        >
            {note.text}
        </div>

        </>
    )
}