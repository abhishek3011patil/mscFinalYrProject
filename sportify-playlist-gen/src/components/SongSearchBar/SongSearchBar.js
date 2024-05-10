import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import './SongSearchBar.css'



function SongSearchBar() {

    const [songsNames, setSongsName] = useState([]);
    const [filteredSongNames, setFilteredSongName]= useState([]);

    useEffect(() => {
        axios
          .get(
            'http://127.0.0.1:5000/get-songs'
          )
          .then(res => {
            setSongsName(res.data);
           })
          .catch(error => console.log(error));

     
    },[]);

    useEffect( ()=> {
      setFilteredSongName(songNameFilterer(songsNames))
      
    }, [songsNames]);


    useEffect(() => {
      const songNames= filteredSongNames;

      const searchInput = document.getElementById('query');
    
  
  searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const filteredSongs = songNames.filter(song => song.toLowerCase().includes(searchText));
    displaySuggestions(filteredSongs,10)});

    } ,[songsNames,filteredSongNames]);


    const songNameFilterer = (data) => {
      
      let songsNameArray = []
      for (const key in data) {
         // Check if the key is a valid index number
         if (Object.prototype.hasOwnProperty.call(data, key) && !isNaN(parseInt(key))) {
           // Add the song name to the array
           songsNameArray.push(data[key]);
         }
         }
      
         return songsNameArray

    }

    const  displaySuggestions = (suggestions, maxSuggestions) =>{
      const suggestionsContainer = document.getElementById('suggestionsContainer');
      const searchInput = document.getElementById('query');
      suggestionsContainer.innerHTML = '';
      // Slice the suggestions array to display only the first 'maxSuggestions' items
        suggestions.slice(0, maxSuggestions).forEach(song => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestionItem');
        suggestionItem.textContent = song;
        suggestionItem.addEventListener('click', function() {
          searchInput.value = song;
          suggestionsContainer.innerHTML = '';
        });

        suggestionsContainer.appendChild(suggestionItem);

      });
    }



    
  return (
    <div>
         <div id="search">
        <form role="search" id="form">
            <input type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content"/>
            <input type="button" value="Submit"/>
          </form>
          <div id="suggestionsContainer" className="suggestions-container"></div>
         </div>

         
    </div>
  )
}


export default SongSearchBar;




