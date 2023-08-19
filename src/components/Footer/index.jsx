import React from 'react'
import {FaFacebook,FaTwitterSquare,FaYoutube,FaInstagram,FaLinkedin} from "react-icons/fa";
import './index.css'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-text'>
            <p>Terms & Conditions</p>
            <p>Designed and Developed by <span className='footer-underline'>Arawinz soft solutions pvt ltd. © 2018 - 2023</span></p>
        </div>
        <div className='footer-icons'>
            <p>Privacy Policy</p>
            <div className='icons-block'>
                <FaFacebook className='footer-icon'/>
                <FaTwitterSquare className='footer-icon twitter'/>
                <FaYoutube className='footer-icon youtube'/>
                <FaInstagram className='footer-icon instagram'/>
                <FaLinkedin className='footer-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Footer