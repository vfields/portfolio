import './Projects.css';

// consider making larger/better screen shots or gifs

const findmyapi = require('../../assets/findmyapi.png');
const rancid = require('../../assets/rancid.png');
const fitlit = require('../../assets/fitlit.png');

function Projects() {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Find My API</h3>
          <img src={findmyapi} />
        </div>
        <div className="project-text">
          <h4>Solo | 5 days</h4>
          <p className="description">This responsive and accessible application allows users to search over 1,000 free and public APIs by keyword, category, authentication requirements, CORs policies, and more. Users can save APIs of interest while they continue their search, or take a break with adorable dog pictures and videos!</p>
          <p className="tech-list">TypeScript, React, React Hooks, HTML/JSX, Cypress, CSS, Git, Accessibility, Responsive Design, Webpack, Node.js</p>
          <span className="links"><a href="https://find-my-api.vercel.app/" target='_blank' rel='noopener'>Live Preview</a> | <a href="https://github.com/vfields/find-my-api" target='_blank' rel='noopener'>Code Base</a></span>
        </div>
      </article>
      <article className="project">
        <div className="title-img-container">
          <h3 className="title">Rancid Tomatillos</h3>
          <img src={rancid} />
        </div>
        <div className="project-text">
          <h4>Paired | 6 days</h4>
          <p className="description">This accessible application displays a database of movies, and allows users to search for their favorites by title! Clicking a film will redirect the user to a page that displays that movie's unique information, and grants access to the movie's trailer!</p>
          <p className="tech-list">React, JavaScript, HTML/JSX, Cypress, CSS, RESTful APIs, Git, Accessibility, Webpack, Node.js</p>
          <span className="links"><a href="https://rancid-tomatillos-theta.vercel.app/" target='_blank' rel='noopener'>Live Preview</a> | <a href="https://github.com/vfields/rancid-tomatillos" target='_blank' rel='noopener'>Code Base</a></span>
        </div>
      </article>
      <article className="project">
      <div className="title-img-container">
        <h3 className="title">FitLit</h3>
        <img src={fitlit} />
      </div>
        <div className="project-text">
          <h4>Group | 10 days</h4>
          <p className="description">FitLit dynamically displays a user's different activity data, lets a user to input new data, and allows a user to compare their daily vs. weekly measurements. A user can also see how their numbers stack up against the average of every other users' inputs in the database, as well as their individual all-time averages.</p>
          <p className="tech-list">JavaScript, HTML, CSS, Mocha, Chai, RESTful APIs, Git, Accessibility, Webpack</p>
          <span className="links"><a href="https://github.com/vfields/fitlit" target='_blank' rel='noopener'>Code Base</a></span>
        </div>
      </article>
    </section>
  );
}

export default Projects;