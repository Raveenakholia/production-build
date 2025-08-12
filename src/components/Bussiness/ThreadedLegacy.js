/** @format */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SmartIndiaHackathon() {
  return (
    <div>
      {/* Hero Section */}
      <header className='bg-light py-5 text-center'>
        <div className='container'>
          <h1 className='display-4 fw-bold'>Welcome to MyBrand</h1>
          <p className='lead text-muted mb-4'>
            At Threaded Legacy, we celebrate the timeless art of crochet and
            knitting, lovingly handcrafted by a mother’s skilled hands and
            guided by a daughter’s vision. Each piece carries not just yarn and
            patterns, but memories, traditions, and the warmth of care. From
            cozy wearables to elegant home décor, our creations blend classic
            techniques with modern design — making every item as unique as the
            hands that made it. Whether it’s a gift for someone special or a
            keepsake for yourself, our work is crafted to be cherished for years
            to come. Every loop, knot, and weave is more than craft — it’s a
            legacy, threaded with love.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className='py-5 bg-white'>
        <div className='container'>
          <div className='row text-center mb-4'>
            <h2 className='fw-bold'>Our Products</h2>
            <p className='text-muted'>Why you’ll love working with us</p>
          </div>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className='card shadow-sm h-100 border-0'>
                <div className='card-body text-center'>
                  <i className='bi bi-lightning-charge-fill fs-1 text-primary mb-3'></i>
                  <h5 className='card-title'>
                    Handcrafted with Love & Precision
                  </h5>
                  <p className='card-text text-muted'>
                    Every creation is made entirely by hand, blending
                    traditional crochet and knitting techniques with modern
                    designs — ensuring each piece is one-of-a-kind.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card shadow-sm h-100 border-0'>
                <div className='card-body text-center'>
                  <i className='bi bi-shield-lock-fill fs-1 text-success mb-3'></i>
                  <h5 className='card-title'>Premium Quality & Comfort</h5>
                  <p className='card-text text-muted'>
                    We use carefully selected, high-quality yarns for
                    durability, softness, and a luxurious feel — perfect for
                    long-lasting wear and home décor.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card shadow-sm h-100 border-0'>
                <div className='card-body text-center'>
                  <i className='bi bi-brush-fill fs-1 text-warning mb-3'></i>
                  <h5 className='card-title'>
                    Timeless, Personalized Creations
                  </h5>
                  <p className='card-text text-muted'>
                    From classic patterns to custom orders, our work is designed
                    to suit your style and preserve the warmth of handmade
                    artistry for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-dark text-white py-4 text-center'>
        <div className='container'>
          <p className='mb-0'>
            &copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
