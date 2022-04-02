import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Logo</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/abedbashir/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/abed.bachir" target="_blank"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/abed-bashir-952732208/" target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdel Rahman Bashir . All Right Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer