import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {

  const APP_ID = '15fdf7f3';
  const APP_KEY = 'c140fc867e7611b9ff2d3739de62260d';
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

    useEffect( () => {
      const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
      }
      getRecipes();
    }, [query]);




const updateSearch = evt => {
  setSearch(evt.target.value);
};

const getSearch = evt => {
  evt.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search=btn" type="submit"> Search </button>
    </form>
    {recipes.map(recipe => (
      <Recipe
      key={recipe.recipe.label} 
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      />
    ))};
    </div>
  );
};

export default App;
