/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 bg-light'>
      <h1 className='display-1 text-danger'>404</h1>
      <h2 className='text-dark mb-3'>Page Not Found</h2>
      <p className='text-muted mb-4 text-center px-3'>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href='/'
        className='btn btn-primary'>
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
