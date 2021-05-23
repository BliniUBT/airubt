import React from 'react';
import '../assets/css/Footer.css';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



function Footer() {
    return (
        <div className='footer'>
           
            
          
             <p>© 2021 airUBT</p>
             <ul>
             <li>FAQ · </li>
             <li>Terms of Service · </li>
             <li>Privacy Policy</li>
             </ul>

             <ul>
             <li> <FaTwitter color="#2F4AD8" size={20}/></li>
             <li> <FaFacebook color="#2F4AD8" size={20}/></li>
             <li> <FaInstagram color="#2F4AD8" size={20}/></li>
             </ul>
            
             
           
    
            
            
            
           

        </div>
       
                
            
       
        
        
        
        
       
    )
}

export default Footer