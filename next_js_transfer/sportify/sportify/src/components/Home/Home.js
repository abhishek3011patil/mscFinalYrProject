import React from 'react'
import { useState, useEffect } from "react";
//import './Home.css'

function Home() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      
    }); 

  return (
   

    <div id="hometitlediv" className='h-2/4 bg-lime-500 flex flex-col justify-center items-center gap-3'>
        <img src="" alt="" srcSet="" />
    <h1 className="typed-out text text-7xl font-extrabold ">Let the Music <span style={{color: "#F0CD13" }}>Guide You </span></h1>

    <h3 className='font-semibold'>Discover your perfect playlist with our intelligent recommendation system</h3>
    
    <button className="button bg-black rounded-md font-medium text-lime-600 p-2" > Create a Playlist</button>

</div>
    
    
  )
}

export default Home