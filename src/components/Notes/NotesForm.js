import React, { useState } from "react"

function NotesForm(props) {
  const { onSubmit } = props

  const [note, setNote] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!note) return

    onSubmit(note)
    setNote('')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mt-4 flex">
        <input
          className="bg-white outline-none focus:border-blue-500 border-2 border-gray-400 rounded py-2 px-4 flex-grow mr-2"
          placeholder="New note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
      </div>
    </form>
  )
}

export default NotesForm