import React from 'react';
import { Link } from "react-router-dom";
import style from './styled.module.css';
import {GiFruitBowl} from 'react-icons/gi'

export default function Navbar() {
    return (
      
    <div className={style.navbar}>
        <nav className={style.navbarRight}> 
        <ul className={style.list}>
            <li className={style.listItem}>    
                <Link to='/' className={style.link1}>
                <GiFruitBowl></GiFruitBowl>
                </Link>   
                <Link to='/home' className={style.link}>Home</Link>
                <Link to='/create' className={style.link}>Create Recipe</Link>   
                <Link to='/about' className={style.link}>About</Link>  
                <Link to='/contact' className={style.link}>Contact</Link>  
                </li>
            </ul>
    </nav>
    </div>

    )
}