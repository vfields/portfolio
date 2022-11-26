import './About.css';

const fields = require('../../assets/fields.png');

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <p>Before software, I was a pelvic physical therapist and small business owner, providing compassionate and trauma-informed care to patients of all ages, abilities, and backgrounds. </p>
        <p>In 2022, after recovering from a significant pelvic injury of my own—of all things!—I took a leap and enrolled in the nationally accredited front-end engineering program at the <a href="https://turing.edu/" target='_blank' rel='noopener'>Turing School of Software & Design</a>.
          I quickly fell in love with the problem-solving, collaboration, and creativity that programming offers, and I'm so looking forward to the next chapter.</p>
        <p>When I'm not coding, you'll find me adventuring with my husband and pupflake, writing, or spending time outside.</p>
      </div>
      <img src={fields} alt="Tori, smiling and wearing a burnt orange velvet sweater." />
    </section>
  );
}

export default About;