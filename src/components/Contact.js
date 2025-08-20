/** @format */

// src/components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className='container my-5'>
      <h2 className='text-center mb-4'>Contact Me</h2>
      <p className='text-center text-muted mb-5'>
        Have a question or want to work together? Leave your details below.
      </p>

      {/* 
        Replace the action URL with your own Formspree endpoint.
        You get this URL after creating a new form on Formspree.
      */}
      <form
        action='https://formspree.io/f/xldlypzq'
        method='POST'
        className='col-md-8 col-lg-6 mx-auto'>
        <div className='mb-3'>
          <label
            htmlFor='name'
            className='form-label'>
            Full Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            required
          />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='email'
            className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            required
          />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='message'
            className='form-label'>
            Message
          </label>
          <textarea
            className='form-control'
            id='message'
            name='message'
            rows='5'
            required></textarea>
        </div>

        <div className='text-center'>
          <button
            type='submit'
            className='btn btn-primary px-5'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
