import './Projects.css';

const halfFlower = require('../../assets/half-flower.png');
const rHalfFlower = require('../../assets/r-half-flower.png');
const findmyapi = require('../../assets/findmyapi.png');
const eatlocal = require('../../assets/eatlocal.png');
const rancid = require('../../assets/rancid.png');
const fitlit = require('../../assets/fitlit.png');

function Projects() {
  return (
    <section className="projects-section">
      <h1>Turing Projects</h1>
      <img className="r-flower" src={rHalfFlower} alt="the left half of a sunflower, outlined in burnt orange"/>
      <img className="l-flower" src={halfFlower} alt="the right half of a sunflower, outlined in burnt orange" />
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Eat Local</h3>
          <img src={eatlocal} alt="preview of Eat Local's search and login features"/>
        </div>
        <div className="project-text">
          <h4>Group | 14 days</h4>
          <p className="description">This accessible application was built on a full-stack team of 7 engineers—3 FE, 4 BE—featuring GitHub's issue ticketing system, CI/CD, agile practices, and an emphasis on collaboration. It allows any user to search for local businesses, and a logged in user to store and delete their favorites!</p>
          <p className="tech-list">React, JavaScript, HTML/JSX, CircleCI, CI/CD, Cypress, CSS, Git/GitHub, GraphQL & RESTful APIs, Accessibility, Webpack</p>
          <span className="links"><a href="https://eatlocal.vercel.app/" target='_blank' rel="noreferrer">Live Preview</a> | <a href="https://github.com/Eat-Local/eat-local-fe" target='_blank' rel="noreferrer">Code Base</a></span>
        </div>
      </article>
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Find My API</h3>
          <img src={findmyapi} alt="preview of Find My API's search function"/>
        </div>
        <div className="project-text">
          <h4>Solo | 6 days</h4>
          <p className="description">Built utilizing a wireframe and Github projects to organize user personas, stories, and acceptance criteria, this responsive and accessible application allows users to search over 1,000 public APIs by keyword, category, and more. Users can save APIs of interest while they continue their search, or take a break with adorable dog pictures and videos!</p>
          <p className="tech-list">TypeScript, React, HTML/JSX, Cypress, CSS, Git/GitHub, RESTful APIs, Accessibility, Responsive Design, Webpack</p>
          <span className="links"><a href="https://find-my-api.vercel.app/" target='_blank' rel="noreferrer">Live Preview</a> | <a href="https://github.com/vfields/find-my-api" target='_blank' rel="noreferrer">Code Base</a></span>
        </div>
      </article>
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Rancid Tomatillos</h3>
          <img src={rancid} alt="preview of Rancid Tomatillo's landing page" />
        </div>
        <div className="project-text">
          <h4>Paired | 6 days</h4>
          <p className="description">Featuring a robust Cypress E2E testing suite that considers happy- and sad-paths, this accessible application displays a database of movies, and allows users to search for their favorites by title. React Router handles bad URLs, and redirects users to a new page when a movie is clicked that displays that movie's unique information.</p>
          <p className="tech-list">React, React Router, JavaScript, HTML/JSX, Cypress, CSS, RESTful APIs, Git/GitHub, Accessibility, Webpack</p>
          <span className="links"><a href="https://rancid-tomatillos-theta.vercel.app/" target='_blank' rel="noreferrer">Live Preview</a> | <a href="https://github.com/vfields/rancid-tomatillos" target='_blank' rel="noreferrer">Code Base</a></span>
        </div>
      </article>
      <article className="project">
      <div className="title-img-container">
        <h3 className="title">FitLit</h3>
        <img src={fitlit} alt="preview of FitLit's user dashboard" />
      </div>
        <div className="project-text">
          <h4>Group | 10 days</h4>
          <p className="description">Implementing form validation, error-handling, and TDD with a comprehensive Mocha & Chai unit- and integration-testing suite, FitLit dynamically displays a user's different activity data, lets a user to input new data, and allows a user to compare their daily vs. weekly measurements.</p>
          <p className="tech-list">JavaScript, HTML, CSS, Mocha, Chai, RESTful APIs, Git/GitHub, Accessibility</p>
          <span className="links"><a href="https://github.com/vfields/fitlit" target='_blank' rel="noreferrer">Code Base</a></span>
        </div>
      </article>
    </section>
  );
}

export default Projects;