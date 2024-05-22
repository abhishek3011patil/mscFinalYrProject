import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SongSearchBar.css';
import TestAPI from '../TestAPI/TestAPI.js';

function SongSearchBar() {
  const [songsNames, setSongsNames] = useState([]);
  const [filteredSongNames, setFilteredSongNames] = useState([]);
  const [selectedSong, setSelectedSong] = useState('');

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/get-songs')
      .then(res => {
        setSongsNames(res.data);
      })
      .catch(error => console.log(error));
  }, []);



  useEffect(() => {
    setFilteredSongNames(songNameFilterer(songsNames));
  }, [songsNames]);



  useEffect(() => {
    const searchInput = document.getElementById('query');

    const handleInput = (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredSongs = filteredSongNames.filter(song => song.toLowerCase().includes(searchText));
      displaySuggestions(filteredSongs, 10);
    };

    searchInput.addEventListener('input', handleInput);

    return () => {
      searchInput.removeEventListener('input', handleInput);
    };
  }, [filteredSongNames]);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('query');
    
    setSelectedSong(searchInput.value);
    console.log(selectedSong)
  };
  

  const songNameFilterer = (data) => {
    let songsNameArray = [];
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && !isNaN(parseInt(key))) {
        songsNameArray.push(data[key]);
      }
    }
    return songsNameArray;
  };

  const displaySuggestions = (suggestions, maxSuggestions) => {
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const searchInput = document.getElementById('query');
    suggestionsContainer.innerHTML = '';
    suggestions.slice(0, maxSuggestions).forEach(song => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestionItem');
      suggestionItem.textContent = song;
      suggestionItem.addEventListener('click', () => {
        searchInput.value = song;
        suggestionsContainer.innerHTML = '';
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
  };

  return (
    <div>
      <div id="search">
        <form role="search" id="form" onSubmit={handleSubmit}>
          <input type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content" />
          <button type="submit" id="searchButton"> Submit</button>
        </form>
        <div id="suggestionsContainer" className="suggestions-container"></div>
      </div>

      <div className="songSuggested">
        <TestAPI name={selectedSong} />
      </div>
    </div>
  );
}

export default SongSearchBar;
