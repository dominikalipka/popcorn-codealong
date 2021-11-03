import React from "react";

function Movie(props) {

  // let popularMovie;
  // if (props.rating >= 9) {
  //   popularMovie = <p> <strong>POPULAR</strong> </p>
  // } 

    return (
      <div className="movies">
        <h3>{props.title}</h3>
        <img src={props.imgURL} alt="movie pic" />
        <p>Rating: {props.rating}</p>
        {props.rating >= 9 && <p><strong>POPULAR</strong></p>}
        {/* {popularMovie} */}
      </div>
    );
}

export default Movie;