import React, { Component } from 'react';

const AppFrame = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-default header">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="header-name"><a href="/">Christine Glass</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
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
