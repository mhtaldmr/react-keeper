import React from "react";
import Deleteicon from "@material-ui/icons/Delete";
import Fab from '@material-ui/core/Fab';


export default function Note(props) {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Fab onClick={() => {
        props.onDelete(props.id);
      }}> <Deleteicon /> </Fab>
    </div>
  );
};