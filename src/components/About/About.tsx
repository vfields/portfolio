import './About.css';

const fields = require('../../assets/fields.png');

function About() {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <div className="about">
        <img src={fields} alt="Tori, smiling and wearing a burnt orange velvet sweater." />
        <div className="about-text">
          <p>Before software, I was a doctor of physical therapy and small business owner; however, after recovering from a significant injury of my own, healthcare became a challenging workspace for me.
          So, in 2022, I enrolled in the nationally accredited front-end engineering program at the <a href="https://turing.edu/" target='_blank' rel="noreferrer">Turing School of Software & Design</a>, and earned my certificate in January of 2023.
          </p>
          <p>The problem-solving, collaboration, and creativity that programming offers perfectly parallels my doctoral experience, and I've quickly fallen in love with software engineering. I'm so excited about the next chapter!</p>
          <p>When I'm not coding, you'll find me adventuring with my husband and <a href="/lacey">pupflake</a>, writing, or playing outside.</p>
        </div>
      </div>
    </section>
  );
}

export default About;