import React, { useState, useEffect } from 'react';
import '../assets/css/cards.css';
import ApartmentCard from './Apartments/ApartmentCard'


function Cards(){

    const[apartments, setApartments] = useState([]);

    useEffect(() =>{
        (
            async () => {
                const response = await fetch('http://localhost:39990/api/apartment/getApartments', {
                    method: 'GET',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include'
                });

                const content = await response.json();
                
                setApartments(content);
            }
        )();

    });

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
            <div className="row e-shop">
                <div className="col-12">
                    <h2 className="mb-4 mt-4 apartment-title">Apartments</h2>
                        <div className="row">
                            {apartments && apartments.map((apartment, i) => (
                                <div key={i} className="col-4 mb-3">
                                    <ApartmentCard apartment={apartment}/>
                                </div>
                            ))}
                        </div>
                        <hr />
                </div> 
            </div>
            </div>
        </div>
        

    )
}

export default Cards