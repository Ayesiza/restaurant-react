import React from 'react';
import './home.css';
import HomeFood from '../../images/food1.jpeg'
import Logo from '../../images/Logo.png';

function Home() {
    return (
        <div className="home">
           
            <div className="home-left">
            <img className="logo-img" alt="Brand" src={Logo}/>
                <h1>The <br/> Sunday Bite</h1>
                <p className="home-paragraph">Delicious Food for every Mood</p>
                <button className="home-button">ORDER NOW</button>
          
            
            </div>
            
           
            <div className="home-right">
            <img className="home-img" src={HomeFood} alt="Chicken"/>
           
            </div>
            
        </div>
    )
}

export default Home
