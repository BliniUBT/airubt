import React, { useState } from 'react';
import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Header from './Header'
import '../assets/css/imageslider.css';

const ImageSlider = ({ slides, testing }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  console.log(current);

  return (
    <div className='slider'>
        <div className="banner-info">
                <h1>Your go-to travel guide</h1>
                <h2>find the best place for <span id='you'>you</span></h2>
                <button id='banner-btn1'>Find now</button>
                <button id='banner-btn2'>Learn more</button>
                {/* <input type="submit" id="banner-btn1"/> */}
                
            </div>
        <Header name={testing} />
      <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
      <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
            
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            
          >
              
            {index === current && (
              <img src={slide.img} alt='travel image' className='image' />
            )}
            
            
          </div>
          
        );
      })}
      
    </div>
  );
};

export default ImageSlider;
