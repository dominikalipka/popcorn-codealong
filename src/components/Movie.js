import React from "react";

function Movie(props) {
    return (
      <div className='movies'>
        <h3>{props.title}</h3>
        <img src={props.imgURL} alt="movie pic" />
        <p>Rating: {props.rating}</p>
      </div>
    );
}

export default Movie;