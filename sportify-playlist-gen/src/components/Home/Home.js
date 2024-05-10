import React from 'react'
import { useState, useEffect } from "react";
import './Home.css'

function Home() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      
    }); 

  return (
   

    <div id="hometitlediv">
        <img src="" alt="" srcset="" />
    <h1 className="typed-out">Let the Music <span style={{color: "#F0CD13" }}>Guide You </span></h1>

    <h3>Discover your perfect playlist with our intelligent recommendation system</h3>
    
    <button className="buttonHomeTitle"> Create a Playlist</button>

</div>
    
    
  )
}

export default Home