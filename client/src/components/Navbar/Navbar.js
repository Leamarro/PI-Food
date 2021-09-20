import React from 'react';
import { Link } from "react-router-dom";
import './styled.css';


export default function Navbar() {
    return (
      
    <div className="navbar">
        <nav className="navbar-right"> 
        <ul className='list'>
            <li className='list-item'>    
                <Link to='/' className="link">
                Food App
                </Link>   
                <Link to='/home' className='link'>Home</Link>
                <Link to='/create' className='link'>Create Recipe</Link>     
                </li>
            </ul>
    </nav>
    </div>

    )
}