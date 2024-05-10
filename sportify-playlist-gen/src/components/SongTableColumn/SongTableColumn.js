import React from 'react'
import './SongTableColumn.css'
function SongTableColumn(props) {
  return (
    <div className='SongTableColumn'>

       
       <img src={props.img_src} alt="" />
     
        <div className="Table_text">
        <p className='Song_name' >{props.song_name}</p>
        <p className='Artist_name' >{props.artist_name}</p>
        </div>
       

    </div>
  )
}

export default SongTableColumn