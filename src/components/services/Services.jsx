import React from 'react';
import './services.css';
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Do</h5>
      <h2>My Work</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full-Stack Web Development</h3>
          </div>
          <ul className="service__list">
            <li> <BiCheck className='service__list-icon' />
              <p>
                Complete web development solutions: frontend, backend, and database integration.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Customized application development for diverse business need.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Responsive design and optimization for enhanced user experiences.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Secure API development and integration for seamless data exchange.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Continuous maintenance and support ensuring reliability and performance.
              </p>
            </li>
          </ul>
        </article>

        {/* ############### END OF FULL STACK ##############  */}

        <article className="service">
          <div className="service__head">
            <h3>Single Page Applications (SPAs)</h3>
          </div>
          <ul className="service__list">
            <li> <BiCheck className='service__list-icon' />
              <p>
                Efficient single-page app development for dynamic user experiences.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Seamless integration of APIs for real-time data updates.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Responsive design ensuring optimal performance across devices.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Interactive user interfaces with intuitive navigation and functionality.
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Scalable architecture for future expansions and feature enhancements.
              </p>
            </li>
          </ul>
        </article>

        {/* ############### END OF Single Page Applications (SPAs) ##############  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Application Development</h3>
          </div>
          <ul className="service__list">
            <li> <BiCheck className='service__list-icon' />
              <p>
                Custom web application development tailored to your unique requirements
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                User-friendly interfaces designed for intuitive navigation and engagement
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Secure backend architecture ensuring data integrity and protection
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Scalable solutions capable of handling growth and increased user demand
              </p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>
                Continuous support and maintenance to keep your application running smoothly
              </p>
            </li>
          </ul>
        </article>

        {/* ############### Custom Web Application Development ##############  */}


      </div>
    </section>
  )
}

export default Services;