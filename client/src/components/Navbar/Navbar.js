import React from 'react';
import { Link } from "react-router-dom";
import './styled.css';
import {GiFruitBowl} from 'react-icons/gi'

export default function Navbar() {
    return (
      
    <div className="navbar">
        <nav className="navbar-right"> 
        <ul className='list'>
            <li className='list-item'>    
                <Link to='/' className="link1">
                <GiFruitBowl></GiFruitBowl>
                </Link>   
                <Link to='/home' className='link'>Home</Link>
                <Link to='/create' className='link'>Create Recipe</Link>   
                <Link to='/about' className='link'>About</Link>  
                <Link to='/contact' className='link'>Contact</Link>  
                </li>
            </ul>
    </nav>
    </div>

    )
}