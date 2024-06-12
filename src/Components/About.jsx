import React from 'react'
import About_Page_image from "../assets/about-background-image.png"
import About_background from "../assets/About Section Background.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'
const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={About_background } alt=""/>
        </div>
        <div className='about-section-image-container'>
          <img src={About_Page_image} alt=""/>
        </div>
        <div className='about-section-text-container'>

        <p className='primary-subheading'>
          About
        </p>
        <h1 className="primary-heading">Food Is An Important Part Of A Balanced Diet
        </h1>
      <p className="primart-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus necessitatibus voluptatibus qui! 
        Sapiente pariatur nobis quo. Harum voluptate culpa earum necessitatibus rem. Beatae distinctio hic, amet repellat labore eaque!

      </p>

      <p className='primary-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla possimus inventore a corrupti itaque rerum, consequuntur mollitia porro ipsum, odit incidunt omnis hic, aut suscipit
         obcaecati quidem cupiditate magnam.
      </p>
      <div className='about-buttons-container'>
        <button className='secondary-button'>Learn More</button>
        <button className='watch-video-button'> <BsFillPlayCircleFill/>watch video</button>
      </div>
      

        </div>

  
        
      
    </div>
  )
}

export default About