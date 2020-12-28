import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  const APP_ID = "e4e95c33";
  const APP_KEY = "89ea274f903f95e525921b79f48edb79";
  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
    //console.log("fetching data");
  }, [query]);
  //2. add second arg i.e. [] to useEffect, so that it runs only once when page is loaded
  //3. give counter inside [counter] so that for every change in counter, this is invoked
  //we gave search inside second arg, so that when search is canged it will call getRecipe() again


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    //console.log(data);
    setRecipes(data.hits);
    //console.log(data.hits);

    // in traditional way it is written as below
    // fetch(tps://api.edamam.com)
    //   .then(response => {
    //     response.json()
    //   })
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(search);
  }

  const getSearch = e => {
    e.preventDefault(); //stopping default page refresh
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <h1>Hello Rk..!</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {/* <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1> */}
      {/* 1. onclick of h1 it invokes useEffect every time, if second arg '[]' is not given */}
      <div className="recipes">
        {
          recipes.map(rec => (
            <Recipe key={rec.recipe.label} title={rec.recipe.label} calories={rec.recipe.calories}
              image1={rec.recipe.image} ingredients={rec.recipe.ingredients} />
          ))
        }
      </div>
    </div>
  )
}
export default App;
