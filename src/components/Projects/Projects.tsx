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
      <h1>Projects</h1>
      <img className="r-flower" src={rHalfFlower} />
      <img className="l-flower" src={halfFlower} />
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Eat Local</h3>
          <img src={eatlocal} alt="preview of Eat Local's search and login features"/>
        </div>
        <div className="project-text">
          <h4>Group | 14 days</h4>
          <p className="description">This accessible application was built on a full-stack team of 7 engineers—3 FE, 4 BE—featuring GitHub's issue ticketing system and CI/CD. It allows any user to search for local restaurants, markets, and breweries, and a logged in user to store and delete their favorites!</p>
          <p className="tech-list">React, JavaScript, HTML/JSX, CircleCI, CI/CD, Cypress, CSS, Git/GitHub, GraphQL & RESTful APIs, Accessibility, Webpack</p>
          <span className="links"><a href="https://eatlocal.vercel.app/" target='_blank' rel='noopener'>Live Preview</a> | <a href="https://github.com/Eat-Local/eat-local-fe" target='_blank' rel='noopener'>Code Base</a></span>
        </div>
      </article>
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Find My API</h3>
          <img src={findmyapi} alt="preview of Find My API's search function"/>
        </div>
        <div className="project-text">
          <h4>Solo | 5 days</h4>
          <p className="description">This responsive and accessible application allows users to search over 1,000 free and public APIs by keyword, category, authentication requirements, CORs policies, and more. Users can save APIs of interest while they continue their search, or take a break with adorable dog pictures and videos!</p>
          <p className="tech-list">TypeScript, React, HTML/JSX, Cypress, CSS, Git/GitHub, RESTful APIs, Accessibility, Responsive Design, Webpack</p>
          <span className="links"><a href="https://find-my-api.vercel.app/" target='_blank' rel='noopener'>Live Preview</a> | <a href="https://github.com/vfields/find-my-api" target='_blank' rel='noopener'>Code Base</a></span>
        </div>
      </article>
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Rancid Tomatillos</h3>
          <img src={rancid} alt="preview of Rancid Tomatillo's landing page" />
        </div>
        <div className="project-text">
          <h4>Paired | 6 days</h4>
          <p className="description">This accessible application displays a database of movies, and allows users to search for their favorites by title! Clicking a film will redirect the user to a page that displays that movie's unique information, and grants access to the movie's trailer!</p>
          <p className="tech-list">React, React Router, JavaScript, HTML/JSX, Cypress, CSS, RESTful APIs, Git/GitHub, Accessibility, Webpack</p>
          <span className="links"><a href="https://rancid-tomatillos-theta.vercel.app/" target='_blank' rel='noopener'>Live Preview</a> | <a href="https://github.com/vfields/rancid-tomatillos" target='_blank' rel='noopener'>Code Base</a></span>
        </div>
      </article>
      <article className="project">
      <div className="title-img-container">
        <h3 className="title">FitLit</h3>
        <img src={fitlit} alt="preview of FitLit's user dashboard" />
      </div>
        <div className="project-text">
          <h4>Group | 10 days</h4>
          <p className="description">FitLit dynamically displays a user's different activity data, lets a user to input new data, and allows a user to compare their daily vs. weekly measurements. A user can also see how their numbers stack up against the average of every other users' inputs in the database, as well as their individual all-time averages.</p>
          <p className="tech-list">JavaScript, HTML, CSS, Mocha, Chai, RESTful APIs, Git/GitHub, Accessibility</p>
          <span className="links"><a href="https://github.com/vfields/fitlit" target='_blank' rel='noopener'>Code Base</a></span>
        </div>
      </article>
    </section>
  );
}

export default Projects;