import './About.css';

const fields = require('../../assets/fields.png');

function About() {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <div className="about">
        <img src={fields} alt="Tori, smiling and wearing a burnt orange velvet sweater." />
        <div className="about-text">
          <p>Before software, I was a pelvic physical therapist and small business owner, providing compassionate and trauma-informed care to patients of all ages, abilities, and backgrounds. </p>
          <p>After recovering from a significant pelvic injury of my own—of all things!—pelvic health became a challenging working space for me. So, in 2022, I enrolled in the nationally accredited front-end engineering program at the <a href="https://turing.edu/" target='_blank' rel="noreferrer">Turing School of Software & Design</a>.
            I quickly fell in love with the similar problem-solving, collaboration, and creativity that programming offers, and I'm so excited about the next chapter.</p>
          <p>When I'm not coding, you'll find me adventuring with my husband and <a href="/lacey">pupflake</a>, writing, or playing outside.</p>
        </div>
      </div>
    </section>
  );
}

export default About;