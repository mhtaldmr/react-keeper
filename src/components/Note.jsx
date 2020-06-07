import React from "react";
import notes from "../notes.js";

function Note() {
    return notes.map(props => 
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;