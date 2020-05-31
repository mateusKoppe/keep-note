import React from "react";

function NotesItem(props) {
  const { title } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden border-2 border-gray-400 my-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}

export default NotesItem;