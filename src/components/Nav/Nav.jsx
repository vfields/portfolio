import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const hamburger = require('../../assets/hamburger.png');
const linkedIn = require('../../assets/linkedin.png');
const gitHub = require('../../assets/github.png');
const resume = require('../../assets/resume.png');

function Nav() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const hamburgRef = useRef();

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target) || hamburgRef.current.contains(event.target)) {
        return;
      }
      setExpanded(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }
  }, [ref, setExpanded])

  return (
    <nav className="navigation">
      <div className="icons">
        <a href="https://www.linkedin.com/in/victoria-ashley-fields/" target='_blank' rel="noreferrer"><img src={linkedIn} alt="LinkedIn icon"/></a>
        <a href="https://github.com/vfields" target='_blank'  rel="noreferrer"><img src={gitHub} alt="GitHub icon"/></a>
        <a href="https://drive.google.com/file/d/1O-7xyTMAJUeofuPjoDTCWg33GCu5KFL_/view?usp=sharing" target='_blank'  rel="noreferrer"><img src={resume} alt="Resume icon"/></a>
      </div>
      <img onClick={() => setExpanded(!expanded)} className="hamburger" src={hamburger} alt="hamburger menu icon" ref={hamburgRef} />
      <div className={"navigation-menu"}>
        <ul>
          <li><NavLink exact to='/' className={expanded ? 'inactive' : 'inactive'}>Home</NavLink></li>
          <li><NavLink exact to='/about' className='inactive'>About</NavLink></li>
          <li><NavLink exact to='/projects' className='inactive'>Projects</NavLink></li>
          <li><NavLink exact to='/skills' className='inactive'>Skills</NavLink></li>
          <li><NavLink exact to='/contact' className='inactive'>Contact</NavLink></li>
        </ul>
      </div>
      {expanded && <div className="dropdown-menu" ref={ref}>
        <span><NavLink exact to='/' className={expanded ? 'inactive' : 'inactive'}>Home</NavLink></span>
        <span><NavLink exact to='/about' className='inactive'>About</NavLink></span>
        <span><NavLink exact to='/projects' className='inactive'>Projects</NavLink></span>
        <span><NavLink exact to='/skills' className='inactive'>Skills</NavLink></span>
        <span><NavLink exact to='/contact' className='inactive'>Contact</NavLink></span>
      </div>}
    </nav>
  );
}

export default Nav;