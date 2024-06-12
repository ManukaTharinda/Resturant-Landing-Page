import React from 'react'
import Navbar from './Navbar'
import Homebanner from '../assets/home-banner-background.png'
import BannerImage from '../assets/home-banner-image.png'
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
<div className='home-container'>
    <Navbar/>
    <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src ={Homebanner} alt="background banner"/>
        </div>
        <div className='home-text-section'>
        
            <h1 className='primary-heading'>
                Your Favorite Food Delivered Hot & Fresh
            </h1>
            <p className='primary-text'>
            Healthy switcher chefs do all the prep work, like <br/> 
            peeding, chopping & marinating, so you can cook
            a fresh food.
            </p>
            <button className='secondary-button '>Order Now <FiArrowRight/>
            </button>
    
    </div>


    <div className='home-image-container'>
        <img src={BannerImage} alt="banner image"/>
        </div>

        
    </div>



</div>



  )
}

export default Home