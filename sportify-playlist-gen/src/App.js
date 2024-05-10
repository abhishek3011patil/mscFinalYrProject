import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js'

import TestAPI from './components/TestAPI/TestAPI.js'
import SongSearchBar from './components/SongSearchBar/SongSearchBar.js'
import Footer from './components/Footer/Footer.js'

import './App.css';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Home></Home>
    <SongSearchBar></SongSearchBar>
    <TestAPI></TestAPI>
    
    <Footer></Footer>
    </div>
  ); 
}

export default App;
