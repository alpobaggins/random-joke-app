import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/fav" className="navbar-brand">my favourite jokes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link to="/random" className="nav-link active" aria-current="page">random</Link>
              </li>
              <li className="nav-item">
                  <Link to="/without-chuck" className="nav-link active" aria-current="page">without Chuck</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
