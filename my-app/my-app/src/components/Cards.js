import React from 'react';
import '../assets/css/cards.css';


function Cards(){
    return(
        <div className='cards'>
            <div className='cards-info'>
                <h1>Welcome to airUBT</h1>
                <p>AirUBT is a world-class travel guide and accommodation advisor. 
                    With over 10 thousand available locations and 200,000+ users, 
                    we're confident in our abilities to help you discover the holiday 
                    destination of your dreams.
                </p>
            </div>
            <div className='card-container'>
                <h1>Start by picking your perfect setting</h1>
                <div className='card1-2-cont'>
                <div className='card-1'>
                    <h3>Beach</h3>
                </div>
                <div className='card-2'>
                <h3>Mountains</h3>

                </div>
                </div>
                <div className='card-3'>
                    <h2>Become a Host</h2>
                    <h4>Make passive income by sharing 
                        your space.
                    </h4>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
        

    )
}

export default Cards