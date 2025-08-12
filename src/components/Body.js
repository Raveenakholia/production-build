/** @format */

import RaveenaKholia from '../assets/RV.jpeg';

const Body = () => {
  return (
    <div className='container my-5 '>
      <h1>I Build Legacies in Code and Craft.</h1>
      <p>
        They say code is logic — I say it’s poetry. With React and Redux in my
        toolkit and vision in my heart, I craft experiences that are fast,
        fluid, and unforgettable. My journey from building enterprise apps to
        creating a handmade homegrown brand proves one thing: I don’t just build
        — I build with meaning. Welcome to my digital kingdom.
      </p>
      <p className='fw-semibold'>
        If you're looking for someone who blends logic with soul — let's
        connect.
      </p>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: 'none',
        }}>
        <img
          src={RaveenaKholia}
          alt='Raveena Kholia'
          style={{ maxWidth: '800px' }}
        />
      </div>
      <div className='profile-section '>
        <section
          id='projects'
          class='py-5'>
          <div class='container'>
            <div
              class='text-center mb-5'
              style={{ color: 'black' }}>
              <h2 class='mb-3 '>Domain-Specific Projects</h2>
            </div>

            <div class='row g-4'>
              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>Au Small Finance Bank</h5>
                    <p class='card-text'>
                      An interactive chatbot UI built using{' '}
                      <strong>
                        NEMF (Newgen Enterprise Mobility Frame work)
                      </strong>
                      , designed for retail banking customers. Features include
                      account info, loan inquiry, and card support — all powered
                      by Redux for state.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-info me-1'>JQuery</span>
                      <span class='badge bg-primary me-1'>NEMF</span>
                      <span class='badge bg-success'>HTML</span>
                      <span class='badge bg-success margin-left'>
                        Form Validations
                      </span>
                      <span class='badge bg-success'>Regex</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>Dashboard PoC – NEMF Product</h5>
                    <p class='card-text'>
                      Developed a modern and interactive dashboard proof of
                      concept for the NEMF product to visualize key business
                      metrics and operational data. The goal was to demonstrate
                      how a user-centric, real-time dashboard could enhance
                      decision-making for stakeholders.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-primary me-1'>Vue js</span>
                      <span class='badge bg-dark'>Ajax</span>
                      <span class='badge bg-success margin-left'>MySQL</span>
                      <span class='badge bg-dark margin-left'>
                        JBOSS Eap Server{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>
                      {' '}
                      IBPS – Laptop Version of Dashboard PoC for NEMF Product
                    </h5>
                    <p class='card-text'>
                      Extended the NEMF product’s dashboard proof of concept
                      into a dedicated laptop/desktop version, tailored for IBPS
                      users who require a broader data view and advanced
                      analytics on larger screens. This version aimed to enhance
                      operational oversight and data-driven decision-making.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-primary me-1'>React</span>
                      <span class='badge bg-primary me-1'>
                        JBOSS Eap Server
                      </span>
                      <span class='badge bg-dark'>Ajax</span>
                      <span class='badge bg-success'>SVN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>U4SM - Unit4 Student Management</h5>
                    <p class='card-text'>
                      Developed and customized cloud-based Unit4 Student
                      Management (U4SM) solutions in the education domain,
                      integrating APIs, automating workflows, migrating legacy
                      student data, and enhancing portals to streamline the
                      entire student lifecycle from admissions to graduation.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-info me-1'>Knockout js</span>
                      <span class='badge bg-info me-1'>Wordpress</span>
                      <span class='badge bg-primary me-1'>React</span>
                      <span class='badge bg-secondary'>Education</span>
                      <span class='badge bg-secondary'>Code Refactoring</span>
                      <span class='badge bg-success margin-left'>Docker</span>
                      <span class='badge bg-success margin-left'>
                        Microsoft Azure
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
