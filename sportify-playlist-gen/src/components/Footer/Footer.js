import React from 'react'
import './Footer.css'
import { CiInstagram,CiFacebook,CiLinkedin} from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div className='Footer'>

     <div className="pageLinks">
         <a href="">Home</a>
         <a href="">Playlist Generator</a>
        <a href="">Contact</a>
     </div>

    

      <div className="iconsList">
       
      <CiInstagram size={40}/>
      <CiFacebook size={40}/>
      <CiLinkedin size={40}/>
      <FaGithub size={40}/>
      </div>



       <p> &#169;2024 Abhishek Patil </p>


    

        
    </div>
  )
}

export default Footer