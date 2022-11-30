import { NavLink } from 'react-router-dom';
import './Nav.css';

const linkedIn = require('../../assets/linkedin.png');
const gitHub = require('../../assets/github.png');
const resume = require('../../assets/resume.png');

function Nav() {
  return (
    <nav className="navigation">
      <div className="links">
      <NavLink exact to='/' className='inactive'>Home</NavLink> <NavLink exact to='/about' className='inactive'>About</NavLink> <NavLink exact to='/projects' className='inactive home'>Projects</NavLink> <NavLink exact to='/skills' className='inactive'>Skills</NavLink> <NavLink exact to='/contact' className='inactive'>Contact</NavLink>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/victoria-ashley-fields/" target='_blank' rel='noopener'><img src={linkedIn} alt="LinkedIn icon"/></a>
        <a href="https://github.com/vfields" target='_blank' rel='noopener'><img src={gitHub} alt="GitHub icon"/></a>
        <a href="https://drive.google.com/file/d/1pO-Fs53qPmDtXdhcTvpYBlrvDpNc4m6_/view?usp=sharing" target='_blank' rel='noopener'><img src={resume} alt="Resume icon"/></a>
      </div>
    </nav>
  );
}

export default Nav;