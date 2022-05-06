import React from 'react'
import ME from '../../assets/me-about.jpg'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias numquam eveniet beatae mollitia officiis incidunt tempore ut, quis, eos laborum praesentium hic minima nulla aspernatur, magnam quod odit? Provident, exercitationem!

              </p>
              <div className='about__content-link'>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
              </div>
        </div>
      </div>
    </section>
  )
}

export default About
