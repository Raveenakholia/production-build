/** @format */

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm navbar'>
      <div className='container'>
        <Link
          className='navbar-brand'
          to='/'>
          Raveena
        </Link>
        <button
          className='sm:hidden'
          onClick={() => setOpen(!open)}></button>
        <div className='collapse navbar-collapse'>
          <ul className={`sm:flex sm:space-x-4 ${open ? 'block' : 'hidden'}`}>
            open && (
            <li
              onClick={() => setOpen(!open)}
              className='w-full text-left sm:w-auto'>
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
            )
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
