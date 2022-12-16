import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const hamburger = require('../../assets/hamburger.png');
const linkedIn = require('../../assets/linkedin.png');
const gitHub = require('../../assets/github.png');
const resume = require('../../assets/resume.png');

function Nav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navigation">
      <div className="icons">
        <a href="https://www.linkedin.com/in/victoria-ashley-fields/" target='_blank' rel='noopener'><img src={linkedIn} alt="LinkedIn icon"/></a>
        <a href="https://github.com/vfields" target='_blank' rel='noopener'><img src={gitHub} alt="GitHub icon"/></a>
        <a href="https://drive.google.com/file/d/1evYatitgq4YEryRDejnJkAv-0WzjCcdv/view?usp=sharing" target='_blank' rel='noopener'><img src={resume} alt="Resume icon"/></a>
      </div>
      <img onClick={() => setExpanded(!expanded)} className="hamburger" src={hamburger} alt="hamburger menu icon" />
      <div className={expanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li><NavLink exact to='/' className={expanded ? 'inactive' : 'inactive'}>Home</NavLink></li>
          <li><NavLink exact to='/about' className='inactive'>About</NavLink></li>
          <li><NavLink exact to='/projects' className='inactive'>Projects</NavLink></li>
          <li><NavLink exact to='/skills' className='inactive'>Skills</NavLink></li>
          <li><NavLink exact to='/contact' className='inactive'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;