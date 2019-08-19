import React from 'react';

const NavigationBar = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/Home">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav text-center">
      <li className="nav-item active">
        <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/CreatePost">Create post</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ShowPost">Show Post</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default NavigationBar;