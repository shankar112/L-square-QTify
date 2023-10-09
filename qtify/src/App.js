import './App.css';
import Card from './components/Cards/Card';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Card />
    </div>
  );
}

export default App;
