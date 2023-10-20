import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/Api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  let [topAlbumsData, setTopAlbumsData] = useState([]);
  let [newAlbumsData, setNewAlbumsData] = useState([]);
  let [data, setData] = useState([]);
  let [songsData, setSongsData] = useState([]);
  let [filteredDataValues, setFilterDataValues] = useState([]);
  let [toggle, setToggle] = useState([]);
  let [value, setValue] = useState([]);

  let generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };

  let generateNewAlbumsData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
  };

  let handleToggle = () => {
    setToggle(!toggle);
  };

  let handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongsData();
    generateData();
  }, []);

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  const generateData = async () => {
    try {
      let res = await fetchTopAlbums();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  let generateAllSongsData = async () => {
    try {
      let res = await fetchSongs();
      setSongsData(res);
      setFilterDataValues(res);
    } catch (error) {
      console.error(error);
    }
  };

  let filteredData = (val) => {
    setFilterDataValues(val);
  };

  // useEffect(() => {
  //   generateData();
  //   generateAllSongsData();
  // },[])

  return (
    <div>
      <Navbar data={data} />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section
          data={topAlbumsData}
          // data={data}
          type="album"
          title="Top Albums"
          filteredDataValues={data}
        />
        <Section
          data={newAlbumsData}
          // data={data}
          type="album"
          title="New Albums"
          filteredDataValues={data}
        />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
