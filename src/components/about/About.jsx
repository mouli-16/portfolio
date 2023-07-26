import React from 'react'
import ME from '../../assets/sixth.jpg'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" className='about__img'/>
          </div>
        </div>

        <div className="about__content">
              <p>
                I'm a final year undergraduate from National Institute Of Technology, Durgapur.
                A fullstack web-developer with an experience in frameworks like ReactJs, VueJs, NodeJs, ExpressJs and languages such as C/C++ and Js.
                I along with my team have won Smart India Hackathon 2022 and Code For Good Hackathon 2022.

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
