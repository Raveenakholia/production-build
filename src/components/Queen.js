/** @format */

import { Link } from 'react-router-dom';

const Queen = () => {
  return (
    <div className='bg-primary text-white text-center py-5'>
      <section className='py-5 bg-light text-center'>
        <div className='container'>
          <h1 className='display-4 fw-bold'>Hi, I'm Raveena Kholia</h1>
          <p className='lead mb-4'>
            Front-End Developer | Founder of <strong>Threaded Legacy</strong>
            <br />I build clean, scalable apps using React & Redux — and
            handmade stories through craft.
          </p>
          <div className='d-flex justify-content-center gap-3'>
            <Link
              to='/projects'
              className='btn btn-dark btn-lg'>
              View Projects
            </Link>
            <Link
              to='/contact'
              className='btn btn-outline-dark btn-lg'>
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Queen;
