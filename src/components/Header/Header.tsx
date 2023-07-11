import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container ">
      <nav className='navbar'>
        <Link className='link' to="/">Home</Link>
        <ul>
        <li className='mr-2 sm:mr-3 text-xs  sm:text-sm md:mr-7 md:text-lg'>
            <Link to="/">Weather App</Link>
          </li>

          <li className='mr-2 sm:mr-3 text-xs sm:text-sm md:mr-7 md:text-lg'>
            <Link to="/taskify">Taskify</Link>
          </li>
         
          <li className='mr-1 text-xs sm:text-sm md:mr-7 md:text-lg'>
            <Link to="/password_generator">Password Generator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
