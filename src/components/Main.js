import React from "react";

function Main(props) {
  // components/ListDemo.js

  const movies = [
    { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
    { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
    { id: "z2uykusRE", title: "Titanic", director: "James Cameron" },
  ];

  return <div className='movies'>
      <ul>
          {movies.map((item) => { return (
            <li key={item.id}>
              {" "}
              <h3>{item.title}</h3>
              <p>Director: {item.director}</p>
            </li>
          )})}
      </ul>
  </div>;
}

export default Main;