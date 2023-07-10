import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <nav className='navbar'>
        <Link className='link' to="/">Home</Link>
        <ul>
        <li>
            <Link to="/">Weather App</Link>
          </li>

          <li>
            <Link to="/taskify">Taskify</Link>
          </li>
         
          <li>
            <Link to="/url-generator">URL Generator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
