/** @format */

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      {' '}
      <div className='container mt-5'>
        <h1 className='text-primary mb-4'>Welcome to React with Bootstrap!</h1>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Card Title</h5>
            <p className='card-text'>
              This is a basic Bootstrap card inside a React component.
            </p>
            <a
              href='https://getbootstrap.com'
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
