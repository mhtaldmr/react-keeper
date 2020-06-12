import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App() {

  const [items, setItems] = useState([]);

  function addItem(note) {
    if (note.content !== "") {
      setItems(prevItems => {
        return [...prevItems,note];
      });
    } else {
      alert("please write a content!");
    }
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (

    <div>
      <Header/>
      <CreateArea onAdded={addItem}/> 
      {items.map((entry, index) => {
        return (<Note
          onDelete={deleteItem}
          key={index}
          id={index}
          title={entry.title}
          content={entry.content}/>);
      })}
      <Footer/>

    </div>

  );
}
export default App;
