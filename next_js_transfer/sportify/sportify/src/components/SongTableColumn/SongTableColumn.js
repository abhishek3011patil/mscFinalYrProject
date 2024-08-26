import React from "react";
//import './SongTableColumn.css'
function SongTableColumn(props) {
  return (
    <div className="SongTableColumn bg-lime-500 flex flex-col justify-center items-center rounded">
      <img className="w-2/4 " src={props.img_src} alt="" />

      <div className="bg-black w-full text-lime-500">
        <p className="Song_name">{props.song_name}</p>
        <p className="Artist_name">{props.artist_name}</p>
      </div>
    </div>
  );
}

export default SongTableColumn;
