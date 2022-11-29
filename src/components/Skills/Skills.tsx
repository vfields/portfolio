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
          <img src={typescript} />
          <p>TypeScript</p>
        </div>
        <div className="skill-container">
          <img src={javascript} />
          <p>JavaScript</p>
        </div>
        <div className="skill-container">
          <img src={react} />
          <p>React</p>
        </div>
        <div className="skill-container">
          <img src={html} />
          <p>HTML5</p>
        </div>
        <div className="skill-container">
          <img src={css} />
          <p>CSS3</p>
        </div>
        <div className="skill-container">
          <img src={mocha} />
          <p>Mocha</p>
        </div>
        <div className="skill-container">
          <img src={chai} />
          <p>Chai</p>
        </div>
        <div className="skill-container">
          <img src={cypress} />
          <p>Cypress</p>
        </div>
        <div className="skill-container">
          <img src={webpack} />
          <p>Webpack</p>
        </div>
        <div className="skill-container">
          <img src={git} />
          <p>Git</p>
        </div>
        <div className="skill-container">
          <img src={accessibility} />
          <p>Accessibility</p>
        </div>
        <div className="skill-container">
          <img src={responsive} />
          <p>Responsive Design</p>
        </div>
       </div>
    </section>
  );
}

export default Skills;