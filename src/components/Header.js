/** @format */

import { Link } from 'react-router-dom';
import RK_Logo from '../assets/RK_Logo.jpg';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4'>
      <Link
        className='navbar-brand d-flex align-items-center'
        to='/'>
        <img
          src={RK_Logo}
          alt='Logo'
          height='40'
          className='d-inline-block align-top me-2'
        />
        <span className='fw-bold fs-5'>Raveena Kholia</span>
      </Link>

      {/* This button now works entirely with Bootstrap's data attributes */}
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      {/* Bootstrap will automatically add the 'show' class to this div when the button is clicked */}
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              to='/achievements'
              className='nav-link'>
              Achievements
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/SmartIndiaHackathon'
              className='nav-link'>
              Smart India Hackathon
            </Link>
          </li>

          <Link
            to='/ThreadedLegacy'
            className='nav-link'>
            Threaded Legacy{' '}
          </Link>

          <li className='nav-item'>
            <Link
              to='/projects'
              className='nav-link'>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-link'>
              About Me
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
