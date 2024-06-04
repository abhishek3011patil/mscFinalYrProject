import React from 'react'
import axios from 'axios';
import './TestAPI.css'
import { useState, useEffect } from "react";
import SongTableColumn from '../SongTableColumn/SongTableColumn.js'
function TestAPI(props){

    const [songs, setSongs] = useState([]);


 

    
    

    useEffect(() => {

      console.log("testapi: "+props.name)
      
        axios
          .get(
            `http://127.0.0.1:5000/get-songName/${props.name || "Drowse"}`
          )
          .then(res => {
            setSongs(res.data);
            console.log(res.data); 
          })
          .catch(error => console.log(error));

      }, [props.name]);
      

    
  

  return (
    <div className="TestAPI">
       <div className='CardContent'>
        {songs.map(song =>{
            return(

        <SongTableColumn
             song_name={song.song} 
             img_src={song.image}
             artist_name={song.artist}
         />
            )
        })}
    
    </div>
    
    </div>
   
  )
}

export default TestAPI