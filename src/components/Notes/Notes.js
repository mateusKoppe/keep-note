import React, { useState } from "react";

import NotesList from "./NotesList"
import NotesForm from "./NotesForm"

function Notes() {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes([
      ...notes,
      note
    ])
  }

  return (
    <div className="App">
      <NotesList list={notes}/>
      <NotesForm onSubmit={addNote} />
    </div>
  );
}

export default Notes;