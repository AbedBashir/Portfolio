import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/abed-bashir-952732208/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AbedBashir" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/abedbashir/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/abed.bachir" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials