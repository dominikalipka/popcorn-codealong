import React from "react";

function Header(props) {
    return (
      <div className="navigation">
        <div>Popcorn</div>
        <div className="navigation-pages">
          <p>all movies</p>
          <p>|</p>
          <p>search</p>
          <p>|</p>
          <p>account</p>
        </div>
      </div>
    );
}

export default Header;