

import React from 'react';
import './Header.css';

export default function Header () {
  return (
    <header>
      <img src="images/logo.jpeg" alt="Star Trek logo" />
      <div className="Header__content">
        <h1>Select All Checkbox</h1>
        <p>For use in the Neutral Zone...</p>
      </div>
    </header>
  );
}