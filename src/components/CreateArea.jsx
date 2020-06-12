import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


export default function CreateArea(props) {
  const [notes, setNotes] = useState({
      title: "",
      content: ""
    });
  const [zoom, setZoom] = useState(false);

  function handleZoom() {
    setZoom(true);
  }

  function submiteNote(e) {
    const {value, name} = e.target;

    setNotes(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });

  }

  return (
    <div>
      <form className="create-note" onSubmit={(e) => e.preventDefault()}>
        <input
          hidden={zoom ? false : true}
          autoComplete="off"
          onChange={submiteNote}
          value={notes.title}
          name="title"
          placeholder="Title"/>
        <textarea
          onClick={handleZoom}
          autoComplete="off"
          onChange={submiteNote}
          value={notes.content}
          name="content"
          placeholder="Take a note..."
          rows={ zoom ? "3" : "1"}/>
      <Zoom in={zoom}>
        <Fab
          type="submit"
          onClick={() => {
            props.onAdded(notes);
            setNotes(() => {
                return {
                  title: "", 
                  content: ""
                }
              });
          }}><AddIcon /> </Fab>
      </Zoom>
      </form>
    </div>
  );
};