import React, { Component } from 'react';

const AppFrame = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-default header">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="header-name"><a href="/">Christine Glass</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
          </ul>
          <ul className="nav navbar-nav contact-icons">
            <li><a href="https://github.com/cvglass"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href="https://www.linkedin.com/in/christineglass/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a href="mailto:christinevglass@gmail.com"><i className="fa fa-envelope-square" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/christinevglass"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </nav>
      <div>
        {children ? children : null}
      </div>
    </div>
  )
}

export default AppFrame;
