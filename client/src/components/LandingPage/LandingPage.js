import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const LandingPage = () => {
    return (
        <div className={style.container}>   
        <div className={style.divH1}>
            <h1 className={style.h1}>Food Recipes</h1>
        </div>
        <div className={style.divButton}>
        <Link to="/home">
          <button className={style.button}> Home </button>
          </Link>
          </div>
          <div className={style.footer}>
          <footer>PI-Food</footer>
          </div>
    </div>
    )
}
export default LandingPage;