import Announcement from './Components/MainComponents/Announcement';
import Navbar from './Components/MainComponents/NavBar';
import Footer from './Components/MainComponents/Footer';
import './App.css';
import Slider from './Components/MainComponents/Slider';
import NewsLetter from './Components/MainComponents/NewsLetter';
import Products from './Components/Products/Products';

function App () {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Slider />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;