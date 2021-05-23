import React from 'react';
import '../assets/css/banner.css';

function Banner(){
    return(
        <div className='banner'>
            {/*Header inside banner1 */}
            <div className="banner-info">
                <h1>Your go-to travel guide</h1>
                <h2>find the best place for <span id='you'>you</span></h2>
                <button id='banner-btn1'>Find now</button>
                <button id='banner-btn2'>Learn more</button>
                {/* <input type="submit" id="banner-btn1"/> */}
                
            </div>
        </div>





    )
}

export default Banner