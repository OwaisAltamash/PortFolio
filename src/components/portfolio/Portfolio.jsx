import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ROBOTICS, Navigate the future with robotics precision',
    github: 'https://github.com/OwaisAltamash',
    demo: 'https://task-indol.vercel.app/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'GAMING VIDEO HUB, Help to upload the videos on the webApp',
    github: 'https://github.com/OwaisAltamash',
    demo: 'https://react-video-app-red-zeta.vercel.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'XCRYPTO, Real time price data screening',
    github: 'https://github.com/OwaisAltamash',
    demo: 'https://crypto-app-two-iota.vercel.app/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'PROBLEM SOLVING, Solution to all  the problems related to mern stack',
    github: 'https://github.com/OwaisAltamash',
    demo: 'https://myproject-seven-zeta.vercel.app/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'TRAVEL WEBSITE, Help to make easy for the travelers',
    github: 'https://github.com/OwaisAltamash',
    demo: 'https://fanciful-marigold-46ec7a.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Work Link</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;