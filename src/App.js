import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '15fdf7f3';
  const APP_KEY = 'c140fc867e7611b9ff2d3739de62260d';

  const exampleReq =
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button className="search=btn" type="submit">Search</button>
     </form>
    </div>
  );
};

export default App;
