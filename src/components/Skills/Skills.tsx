import './Skills.css';

const javascript = require('../../assets/icons/javascript.png');
const typescript = require('../../assets/icons/typescript.png');
const react = require('../../assets/icons/react.png');
const html = require('../../assets/icons/html.png');
const css = require('../../assets/icons/css.png');
const mocha = require('../../assets/icons/mocha.png');
const chai = require('../../assets/icons/chai.png');
const cypress = require('../../assets/icons/cypress.png');
const webpack = require('../../assets/icons/webpack.png');
const git = require('../../assets/icons/git.png');
const accessibility = require('../../assets/icons/accessibility.png');
const responsive = require('../../assets/icons/responsive.png');

function Skills() {
  return (
    <section className="skills-section">
       <h1>Skills</h1>
       <div className="skills-grid">
        <div className="skill-container">
          <img src={typescript} alt="typescript icon in burnt orange and white"/>
          <p>TypeScript</p>
        </div>
        <div className="skill-container">
          <img src={javascript} alt="javascript icon in burnt orange and white"/>
          <p>JavaScript</p>
        </div>
        <div className="skill-container">
          <img src={react} alt="react icon in burnt orange"/>
          <p>React</p>
        </div>
        <div className="skill-container">
          <img src={html} alt="HTML icon in burnt orange and white"/>
          <p>HTML5</p>
        </div>
        <div className="skill-container">
          <img src={css} alt="CSS icon in burnt orange and white"/>
          <p>CSS3</p>
        </div>
        <div className="skill-container">
          <img src={mocha} alt="Mocha icon in burnt orange and white"/>
          <p>Mocha</p>
        </div>
        <div className="skill-container">
          <img src={chai} alt="Chai icon in burnt orange and white"/>
          <p>Chai</p>
        </div>
        <div className="skill-container">
          <img src={cypress} alt="Cypress icon in burnt orange and white"/>
          <p>Cypress</p>
        </div>
        <div className="skill-container">
          <img src={webpack} alt="Webpack icon in burnt orange and white"/>
          <p>Webpack</p>
        </div>
        <div className="skill-container">
          <img src={git} alt="Git icon in burnt orange and white"/>
          <p>Git</p>
        </div>
        <div className="skill-container">
          <img src={accessibility} alt="Accessibility icon in burnt orange and white"/>
          <p>Accessibility</p>
        </div>
        <div className="skill-container">
          <img src={responsive} alt="Responsive design icon in burnt orange and white"/>
          <p>Responsive Design</p>
        </div>
       </div>
    </section>
  );
}

export default Skills;