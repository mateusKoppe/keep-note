import React from "react";

import NotesItem from "./NotesItem"

function NotesList(props) {
  const { list } = props

  return (
    <div className="flex flex-wrap">
      {list.map((note, index) => (
        <div className="w-1/3 px-1" key={index}>
          <NotesItem title={note}/>
        </div>
      ))}
    </div>
  )
}

export default NotesList;