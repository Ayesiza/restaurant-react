import React from 'react';
import './home.css';
import HomeFood from '../../images/food1.jpeg'

function Home() {
    return (
        <div className="home">
           
            <div className="home-left">
         
                <h1>The <br/> Sunday Bite</h1>
                <p>Delicious Food for every Mood</p>
                <button className="home-button">ORDER NOW</button>
          
            
            </div>
            
           
            <div className="home-right">
            <img className="home-img" src={HomeFood} alt="Chicken"/>
           
            </div>
            
        </div>
    )
}

export default Home
