/** @format */

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm navbar'>
      <div className='container'>
        <Link
          className='navbar-brand'
          to='/'>
          Raveena
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/achievements'>
                Achievements
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/projects'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
