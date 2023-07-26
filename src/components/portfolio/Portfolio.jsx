import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio2.png'
import IMG3 from '../../assets/Portfolio3.png'
import IMG4 from '../../assets/Portfolio4.png'
import IMG5 from '../../assets/Portfolio5.png'
import IMG6 from '../../assets/Portfolio7.png'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'GLGU Audition Portal',
    github: 'https://github.com/mouli-16/Audition_Webapp_UI.git',
    demo: ''
  },
  {
    id:2,
    image:IMG2,
    title: 'SAYHI',
    github: 'https://github.com/mouli-16/SayHi.git',
    demo: ''
  },
  {
    id:3,
    image:IMG3,
    title: 'Sketchio',
    github: 'https://github.com/mouli-16/sketchio.git',
    demo: ''
  },
  {
    id:4,
    image:IMG4,
    title: 'NITMUN Admin Panel',
    github: 'https://github.com/lcnitdgp/NITMUN22_backend.git',
    demo: ''
  },
  {
    id:5,
    image:IMG5,
    title: 'SEA-GI LOCKER',
    github: 'https://github.com/mouli-16/sixth-harmony.git',
    demo: ''
  },
  {
    id:6,
    image:IMG6,
    title: 'Optimum Wellness Portal',
    github: 'https://github.com/mouli-16/optimum_wellness_backend.git',
    demo: ''
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                 <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio