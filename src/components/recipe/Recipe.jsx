import React from 'react'
import './recipe.css';

function Recipe({title,image,ingredients}) {
    return (
        <div className=" recipe ">
          <h3>{title}</h3> 
         
          
          <img className="image"  src={image} alt="food" />
          <ol>
            {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>

            ))}
          </ol>
        </div>
    )
}

export default Recipe;
