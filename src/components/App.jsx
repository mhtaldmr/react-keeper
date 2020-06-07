import React from "react";
import Header from "./Header.jsx";
import notes from "../notes.js";
import Footer from "./Footer.jsx";
import NoteCard from "./noteCard.jsx";

function App () {
    return (
    
        <div>
            <Header />
            {notes.map( entities => 
                <NoteCard
                    key={entities.id}
                    title={entities.title}
                    content={entities.content}
                />
            )}
            <Footer />
        </div>
     
    );
}
export default App;
