import './App.css';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
