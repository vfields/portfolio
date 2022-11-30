import './Nav.css';

const linkedIn = require('../../assets/linkedin.png');
const gitHub = require('../../assets/github.png');
const resume = require('../../assets/resume.png');

function Nav() {
  return (
    <nav className="navigation">
      <div className="links">
        Home About Projects Skills Contact
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