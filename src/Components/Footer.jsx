import React from 'react'
import Logo from '../assets/Logo.svg'



const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt=""/>

            </div>
            <div className='footer-icons'>
                
                
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Career</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span> 24447-99800-6780</span>
                <span>hello@food.com</span>
                <span>pastfood.com</span>
                <span>contact@food.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Condition</span>
                <span>Privacy and Policies</span>
            </div>

        </div>
    </div>
  )
}

export default Footer