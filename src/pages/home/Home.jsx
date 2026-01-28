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
            <span>I'm Meenakshi Sundaram.</span> <br /> Java Backend Developer 
          </h1>
          <p className="home_description">
          Java Backend Developer with 1 year of experience in developing and maintaining backend
          services using Java, Spring Boot, JPA, and MySQL. Experienced in backend API
          development, data handling, validations, and database interactions. Seeking opportunities
          to grow as a backend engineer.
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