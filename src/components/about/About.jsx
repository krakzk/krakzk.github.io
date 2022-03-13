import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get to Know
      </h5>
      <h2>
        About Me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>
                Experience
              </h5>
              <small>3+ years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>
                Projects
              </h5>
              <small>Worked with International Clients</small>
            </article>
            {/*<article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>
                Projects
              </h5>
              <small>80+ completed Projects</small>
            </article>*/}
          </div>
          <p>
            Developer working on mobile and web technologies. Experienced creating Android and iOS apps for internationally acclaimed clients. Published and maintained applications in Google and Apple stores.
Working on web application on both front and backend development.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About