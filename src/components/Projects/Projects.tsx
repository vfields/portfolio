import './Projects.css';

const javascript = require('../../assets/icons/javascript.png');

function Projects() {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <article className="project">
        <img src={javascript} />
        <div className="project-text">
          <h3>Name Of Project</h3>
          <h4>Solo | Timeline</h4>
          <p>Here is a description of this project... more describing; Here is a description of this project... more describing; Here is a description of this project... more describing</p>
          <p>Tech1, Tech2, Tech 3</p>
          <p><a href="/" target='_blank' rel='noopener'>Live Preview</a> | <a href="/" target='_blank' rel='noopener'>Code Base</a></p>
        </div>
      </article>
      <article className="project">
        <div className="project-text">
          <h3>Name Of Project</h3>
          <h4>Solo | Timeline</h4>
          <p>Here is a description of this project... more describing; Here is a description of this project... more describing; Here is a description of this project... more describing</p>
          <p>Tech1, Tech2, Tech 3</p>
          <p><a href="/" target='_blank' rel='noopener'>Live Preview</a> | <a href="/" target='_blank' rel='noopener'>Code Base</a></p>
        </div>
        <img src={javascript} />
      </article>
      <article className="project">
        <img src={javascript} />
        <div className="project-text">
          <h3>Name Of Project</h3>
          <h4>Solo | Timeline</h4>
          <p>Here is a description of this project... more describing; Here is a description of this project... more describing; Here is a description of this project... more describing</p>
          <p>Tech1, Tech2, Tech 3</p>
          <p><a href="/" target='_blank' rel='noopener'>Live Preview</a> | <a href="/" target='_blank' rel='noopener'>Code Base</a></p>
        </div>
      </article>
    </section>
  );
}

export default Projects;