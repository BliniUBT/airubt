import React, {useEffect, useState} from 'react';
// import Home from './components/Home';
import Footer from './Footer';
// import Banner from './components/Banner';
import Cards from './Cards';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Activities from './Activities';
import { render } from "@testing-library/react";




const Home = () => {
  const [name, setName] = useState('');

    useEffect(() =>{
        (
            async () => {
                const response = await fetch('http://localhost:39990/api/user/user', {
                    method: 'GET',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include'
                });

                const content = await response.json();
                console.log(content);
                
                setName(content.firstname);
            }
        )();

    });
  return (
    <div class="home">      
      {/* Banner */}
      <ImageSlider slides={SliderData} testing={name} />
      {/* Banner */}
      {/* Cards */}

      <Cards />

    <div className="activities">
      <Activities/>
    </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
