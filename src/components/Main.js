import React from "react";
import movies from '../data/movies.json'
import Movie from "./Movie";

function Main(props) {
  // components/ListDemo.js


  return <div className='movies'>
      <ul>
          {movies.map((movie) => { return (
            <Movie key={movie.id} {...movie}/>
          )})}
      </ul>
  </div>;
}

export default Main;