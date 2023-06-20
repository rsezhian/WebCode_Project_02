import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import Navbar from "react-bootstrap/Navbar";

// https://www.youtube.com/playlist?list=PLaAoUJDWH9WpmAUayPDh8zrwZoH_PZ4ON

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand">
            Home
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h2>You are not logged in</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
