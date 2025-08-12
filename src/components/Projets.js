/** @format */

// src/components/Projects.js
import React from 'react';
import { useSelector } from 'react-redux';

function Projects() {
  return (
    <div className='container my-5'>
      <h2>Projects</h2>
      <div className='row'>
        <section
          id='projects'
          className='py-5'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='mb-3'>Featured Projects</h2>
              <p className='lead'>
                A showcase of real-world work powered by React, Redux,
                TypeScript & love 💛
              </p>
            </div>

            <div className='row g-4'>
              <div className='col-md-6 col-lg-4'>
                <div className='card h-100 shadow-sm border-0'>
                  <div className='card-body d-flex flex-column'>
                    <h5 className='card-title'>
                      DFCU Bank – Commercial Loan Origination System (CLOS)
                    </h5>
                    <p className='card-text'>
                      Delivered a tailored Commercial Loan Origination System
                      (CLOS) for DFCU Bank, designed to digitize and optimize
                      the complex workflows involved in commercial lending. The
                      system helps manage loan applications, approvals, and
                      documentation with increased speed and transparency.
                    </p>
                    <div className='mt-auto'>
                      <span className='badge bg-primary me-1'>NEMF</span>
                      <span className='badge bg-primary me-1'>Cordova</span>
                      <span className='badge bg-success me-1'>Jquery</span>
                      <span className='badge bg-info text-dark'>HTML</span>
                      <span className='badge bg-info text-dark'>CSS</span>
                    </div>
                  </div>
                  <div className='card-footer bg-transparent border-0 d-flex justify-content-between'></div>
                </div>
              </div>

              <div className='col-md-6 col-lg-4'>
                <div className='card h-100 shadow-sm border-0'>
                  <div className='card-body d-flex flex-column'>
                    <h5 className='card-title'>
                      Bank Muscat – Retail Loan Origination System (RLOS)
                    </h5>
                    <p className='card-text'>
                      Developed and delivered a robust Retail Loan Origination
                      System (RLOS) for Bank Muscat to streamline and automate
                      the end-to-end loan processing workflow. The project
                      focused on enhancing user experience, reducing processing
                      time, and ensuring compliance with banking standards.
                    </p>
                    <div className='mt-auto'>
                      <span className='badge bg-primary me-1'>NEMF</span>
                      <span className='badge bg-primary me-1'>Cordova</span>
                      <span className='badge bg-success me-1'>Jquery</span>
                      <span className='badge bg-info text-dark'>HTML</span>
                      <span className='badge bg-info text-dark'>CSS</span>
                    </div>
                  </div>
                  <div className='card-footer bg-transparent border-0 d-flex justify-content-between'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
