import React, { useEffect, useState } from 'react'
 import Recipe from '../recipe/Recipe';
import './dishes.css';


function Dishes() {
   const  APP_ID = "8d2073e2";
   const APP_KEY ="adb445229aa438c8877ee6cf4eb9bc12";	
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query ,setQuery] =useState("chicken")
   useEffect( () => {
       
    getRecipes();
   }, [query]);

   const getRecipes = async () => {
       const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID }&app_key=${APP_KEY}`
        );
       const data = await response.json();
      setRecipes(data.hits);
    //    console.log(data.hits)
   }
    const updateSearch =e =>{
        setSearch(e.target.value);
    }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    
   return (
        <div className="dishes">
            <form onSubmit= {getSearch} className="search-form">
                <input 
                type="text" 
                className="search-bar"
                value={search}
                onChange={updateSearch}
                 />
                <button 
               
                type="submit" 
                className="search-button"> Search</button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
            ))}
            </div>
        </div>
    )









}

export default Dishes;
