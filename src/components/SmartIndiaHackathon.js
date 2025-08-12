/** @format */

import Smarth1 from '../assets/SmartIH1.jpg';
import FinalResults from '../assets/FinalResults.jpeg';
import T0 from '../assets/Timeline0.jpeg';
import T1 from '../assets/Timeline1.jpeg';
import T3 from '../assets/Timeline3.jpeg';
import Smarth2 from '../assets/SmartH2.jpg';

/**
 * HackathonReport
 * Single-file React component (JSX + Tailwind) ready to drop into a React app.
 * - Default export component
 * - Props allow overriding text and images
 * - Uses Tailwind CSS for styling (assumes Tailwind is configured)
 *
 * Usage:
 * <HackathonReport
 *   projectTitle="Project Title"
 *   dates="12–13 Aug 2025"
 *   team={[{name: 'Raveena Kholia', role: 'Frontend Lead'}]}
 *   images={{cover: '/cover.jpg', day1: '/day1.jpg', night1: '/night1.jpg', day2: '/day2.jpg'}}
 * />
 */

export default function SmartIndiaHackathon({
  projectTitle = 'Ter-X / Smart India Hackathon 2017',
  subtitle = 'Two-day & night journey',
  dates = 'DD–DD MMM YYYY',
  location = 'Mumbai, Maharashtra',
  team = [
    {
      name: 'Raveena Kholia',
      role: 'Frontend lead, Core Team Member UX & UI Developer',
    },
  ],
  tech = `PHP • Javascript • HTML  • CSS • MySQL`,
  summary = `Team TER-X from Chandigarh Group of Colleges, Mohali (Jhanjeri) developed a geo-tracking system that helps locate hospitals and blood banks along with a real-time database showing current blood availability.
1.)Hardware–Software Integration – Understanding how RFID readers, tags, and IoT microcontrollers (e.g., Arduino, Raspberry Pi, ESP8266) interface to capture and transmit data seamlessly.
2.)Data Communication Protocols – Implementing MQTT/HTTP for reliable and secure data transfer between devices and cloud platforms.
3.)Real-Time Analytics – Leveraging cloud services or local servers to process RFID scan data for instant decision-making and alerts.
4.)Scalability & Security – Designing systems that support multiple devices and secure tag authentication to prevent unauthorized access.
5.)Practical Applications – Applying the technology in domains like inventory management, healthcare asset tracking, smart access control, and logistics.`,
  timeline = null, // optional custom timeline
  images = {
    cover: '../assets/SmartIH1.jpg',
    day1: '/day1-photo.jpg',
    night1: '/night1-photo.jpg',
    day2: '/day2-photo.jpg',
    gallery: [T0, T1, T3],
    sponsors: ['/sponsor1.png', '/sponsor2.png', '/sponsor3.png'],
  },
  achievements = [
    'The solution was designed to address urgent healthcare needs by enabling faster and more reliable access to blood supplies during emergencies. Through live location mapping and instant inventory updates, the platform aimed to assist patients, relatives, and healthcare providers in saving critical time during crisis situations.',
  ],
  contact = {
    name: 'Team TER-X',
    email: 'raveenakholia786@gmail.com',
  },
}) {
  const defaultTimeline = [
    {
      title: 'Day 1 — Morning → Night',
      desc: 'Kickoff, ideation, roles assignment, first prototype sprint.',
      items: [
        '08:30 — Registration & breakfast',
        '10:00 — Problem framing & mentor chats',
        '13:00 — Lunch',
        '14:00 — Development sprint',
        '21:00 — Late-night testing & mock demo',
      ],
    },
    {
      title: 'Night 1 — Hack & Refine',
      desc: 'Late-night bug fixes, mentor feedback, and preparing for day 2 demos.',
      items: [
        '00:00 — Local testing & offline checks',
        '02:00 — Power nap & quick code review',
        '04:00 — Final UI polish',
      ],
    },
    {
      title: 'Day 2 — Finalise & Present',
      desc: 'Final integrations, rehearsals, and submission.',
      items: [
        '08:00 — Breakfast & last fixes',
        '11:00 — Final demo rehearsal',
        '14:00 — Submission & judging',
        '16:00 — Awards & wrap-up',
      ],
    },
  ];

  const timelineData = timeline || defaultTimeline;

  return (
    <div className='min-h-screen bg-gray-50 text-gray-800 antialiased smartHackthaon'>
      <header className='bg-gradient-to-br from-yellow-50 via-pink-50 to-white shadow-md'>
        <div className='max-w-5xl mx-auto p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
          <div>
            <h1 className='text-3xl md:text-4xl font-extrabold'>
              {projectTitle}
            </h1>
            <p className='mt-2 text-sm text-gray-600'>
              {subtitle} • {location} • Dates: <strong>{dates}</strong>
            </p>
            <div className='mt-3 flex gap-2 flex-wrap'>
              <span className='px-3 py-1 bg-white text-xs rounded-full shadow-sm'>
                Team: {team.map((t) => t.name).join(', ')}
              </span>
              <span className='px-3 py-1 bg-white text-xs rounded-full shadow-sm'>
                Category: GovTech
              </span>
              <span className='px-3 py-1 bg-white text-xs rounded-full shadow-sm'>
                Status: Completed
              </span>
            </div>
          </div>

          <div className='w-full md:w-64 text-right'>
            <div className='w-40 h-40 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg bg-gray-100'>
              <img
                src={Smarth1}
                alt='cover'
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </div>
      </header>

      <main className='max-w-5xl mx-auto p-6 md:p-12'>
        {/* Summary */}
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold'>Project Summary</h2>
          <p className='mt-3 text-gray-700'>{summary}</p>
        </section>

        {/* Team & Tech */}
        <section className='mb-8 grid md:grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <h3 className='text-lg font-medium'>Team & Roles</h3>
            <ul className='mt-3 space-y-2'>
              {team.map((m, i) => (
                <li key={i}>
                  <strong>{m.name}</strong> — {m.role}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-medium'>Tech Stack</h3>
            <p className='mt-3 text-gray-700'>{tech}</p>
          </div>
        </section>

        {/* Timeline */}
        <section className='mb-8'>
          <h3 className='text-lg font-medium'>Two-Day & Night Timeline</h3>
          <div className='mt-4 space-y-4'>
            {timelineData.map((t, idx) => (
              <article
                key={idx}
                className='bg-white p-4 rounded-lg shadow-sm'>
                <div className='flex items-start justify-between'>
                  <div className='flex-1 pr-4'>
                    <h4 className='font-semibold'>
                      {t.title}{' '}
                      <span className='text-sm text-gray-500'>
                        {t.desc && <span>- {t.desc}</span>}
                      </span>
                    </h4>
                    <ul className='mt-2 text-sm text-gray-700 list-disc list-inside'>
                      {t.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className='mb-8'>
          <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-3'>
            <img
              src={T0}
              alt={'gallery-0'}
              className='object-cover w-full h-full'
              style={{ width: '350px', height: '250px' }}
            />
            <img
              src={Smarth2}
              alt='gallery-1'
              className='object-cover w-full h-full'
              style={{ width: '350px', height: '250px' }}
            />
            <img
              src={T3}
              alt='gallery-2'
              className='object-cover w-full h-full'
              style={{ width: '550px', height: '250px' }}
            />
          </div>
        </section>

        {/* Achievements */}
        <section className='mb-8 bg-white p-6 rounded-lg shadow-sm'>
          <h3 className='text-lg font-medium'>Achievements & Key Learnings</h3>
          <ul className='mt-3 list-disc list-inside text-gray-700'>
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
        <div className='w-full md:w-64 text-right'>
          <div className='w-40 h-40 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg bg-gray-100'>
            <img
              src={FinalResults}
              alt='cover'
              className='object-cover w-full h-full'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
