import React from 'react'
import Profile from '../../assets/home.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './home.css'


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Meenakshi Sundaram.</span> <br /> Web Developer
          </h1>
          <p className="home_description">
            I'm a Web designer & front-end developer focused on crafting clean & user-friendly experience.
            I am passionate about building excellent software that imporves the lives of those around me.
          </p>
          <Link to={'/about'} className='button'>
            More About Me <span className='button_icon'><FaArrowRight /></span>
          </Link>
        </div>
      </div>
      <div className="color_block"></div>
    </section>
  )
}

export default Home