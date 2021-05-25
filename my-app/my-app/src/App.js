import './index.css';
import './assets/css/style.css';
// import Home from './components/Home';
import Footer from './components/Footer';
// import Banner from './components/Banner';
import Cards from './components/Cards';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';



function App() {
  return (
    <div className="App">
      {/* Banner */}
      <ImageSlider slides={SliderData} />
      {/* Banner */}
      {/* Cards */}

      <Cards />


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
