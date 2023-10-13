import './App.css';
import Card from './components/Card/Card';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { fetchTopAlbums } from './api/Api';

function App() {
  let [topAlbumsData, setTopAlbumsData] = useState([]);

  let generateTopAlbumsData = async() => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  } 

  useEffect(()=> {
    generateTopAlbumsData();
  },[])
  return (
    <div>
      <Navbar />
      <HeroSection />
      {
        topAlbumsData.map((item,i) => {
          return(
            <Card data={item} type="album"/>
          )
        })
      }
    </div>
  );
}

export default App;
