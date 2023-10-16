import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { fetchTopAlbums, fetchNewAlbums } from './api/Api';
import Section from './components/Section/Section';

function App() {
  let [topAlbumsData, setTopAlbumsData] = useState([]);
  let [newAlbumsData, setNewAlbumsData] = useState([]);

  let generateTopAlbumsData = async() => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  } 

  let generateNewAlbumsData = async() => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
  }

  useEffect(()=> {
    generateTopAlbumsData();
    generateNewAlbumsData();
  },[])
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums"/>
        {/* <br/>
        <Section data={newAlbumsData} type="album" title="New Albums"/> */}
      </div>
    </div>
  );
}

export default App;
