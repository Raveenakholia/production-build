/** @format */

import PinnacleAward from '../assets/PinnacleAward.jpg';
import GENAI from '../assets/GENAI.jpg';
import Kudos from '../assets/Kudos.jpg';
import Canva from '../assets/Canva.jpg';
import TH from '../assets/TH.png';

const Achievements = () => {
  return (
    <div>
      <section class='py-5 bg-light'>
        <div class='container'>
          <h2 class='text-center mb-5'>Achievements & Certificates</h2>
          <div class='row g-4'>
            <div class='col-md-4'>
              <div class='card h-100 shadow-sm border-0'>
                <div class='card-body text-center'>
                  <i class='bi bi-patch-check fs-1 text-success mb-3'></i>
                  <h5 class='card-title'>
                    Generative AI Learning and Development
                  </h5>
                  <p class='card-text'>Course completed by Raveena Kholia</p>
                  <img
                    src={GENAI}
                    alt='Pinnacle award'
                    style={{
                      width: '314px',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  />
                </div>
                <div class='card-footer bg-transparent border-0 text-center'>
                  <small class='text-muted'>April 2025</small>
                </div>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='card h-100 shadow-sm border-0'>
                <div class='card-body text-center'>
                  <i class='bi bi-award fs-1 text-primary mb-3'></i>
                  <h5 class='card-title'>Pat on the Back</h5>
                  <p class='card-text'>
                    You are truely an asset to the organiztion
                  </p>
                  <img
                    src={Kudos}
                    alt='Pat On the Back'
                    style={{
                      width: '314px',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  />
                </div>
                <div class='card-footer bg-transparent border-0 text-center'>
                  <small class='text-muted'>March 2021 - March 2022</small>
                </div>
              </div>
            </div>

            <div class='col-md-4'>
              <div class='card h-100 shadow-sm border-0'>
                <div class='card-body text-center'>
                  <i class='bi bi-trophy fs-1 text-warning mb-3'></i>
                  <h5 class='card-title'>Pinnacle Performance Award</h5>
                  <p class='card-text'>
                    For Exhibiting excellence through sustained performance and
                    promoting Newgen Value System
                  </p>
                  <img
                    src={PinnacleAward}
                    alt='Pinnacle award'
                    style={{ width: '314px', alignItems: 'center' }}
                  />
                </div>
                <div class='card-footer bg-transparent border-0 text-center'>
                  <small class='text-muted'>September 2020</small>
                </div>
              </div>
            </div>

            <div class='col-md-4'>
              <div class='card h-100 shadow-sm border-0'>
                <div class='card-body text-center'>
                  <i class='bi bi-trophy fs-1 text-warning mb-3'></i>
                  <h5 class='card-title'>Canva Designs</h5>
                  <p class='card-text'></p>
                  <img
                    src={Canva}
                    alt='Pinnacle award'
                    style={{ width: '314px', alignItems: 'center' }}
                  />
                </div>
                <div class='card-footer bg-transparent border-0 text-center'>
                  <small class='text-muted'>April 2025</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
