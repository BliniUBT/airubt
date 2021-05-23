import React from 'react'
import '../assets/css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import FlightIcon from '@material-ui/icons/Flight';



function Header() {
    return (
        <div className='header'>
           
            <FlightIcon className="header__icon" />
           
        <div className='header__center'>
            <input type="text" placeholder="Search..."/>
            
            <SearchIcon />
            

        </div>
       
                
            
       
        
        
        <div className="header__right">
            <button id="loginbutton">Log In</button>
            <button id="signupbutton">Sign Up</button>
            
        </div>
        
        </div>
    )
}

export default Header
