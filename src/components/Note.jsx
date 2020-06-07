import React from "react";
import NoteCard from "./noteCard";


function Note(entities) {
    return( 
        <NoteCard
            key={entities.id}
            title={entities.title}
            content={entities.content}
        />
    );
    
}

export default Note;