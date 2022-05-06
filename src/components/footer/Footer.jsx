import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/__sui__generis_/"><FiInstagram/></a>
        <a href="https://github.com/mouli-16"><FiGithub/></a>
        <a href="https://www.linkedin.com/in/mouli-ghosh-10b6861bb/"><FiLinkedin/></a>
        <a href="https://www.facebook.com/mouli.ghosh.7146557/"><FaFacebookF/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Mouli Ghosh </small>
      </div>
    </footer>
  )
}

export default Footer
