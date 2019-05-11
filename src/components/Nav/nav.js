import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Soundscaper
      </a>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User Menu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">All Sounds</a>
          <a class="dropdown-item" href="#">Your Sounds</a>
          <a class="dropdown-item" href="/">Sign Out</a>
        </div>  
      </li>
    </nav>
  );
}

export default Nav;
