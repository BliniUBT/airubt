import React from "react";
// import Home from './components/Home';
import Footer from './Footer';
// import Banner from './components/Banner';
import Cards from './Cards';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Home() {
  return (
    <div class="home">      
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

export default Home;
