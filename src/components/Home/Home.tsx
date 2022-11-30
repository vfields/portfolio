import './Home.css';

const hello = require('../../assets/hello.png');

function Home() {
  return (
    <section className="home">
      <div className="intro-container">
        <h1>Hi, I'm Tori.</h1>
        <h1 className="engineer">I'm a software engineer.</h1>
        <div className="intro">Nice to meet you! I'm currently seeking a position—feel free to check out my <a href="/projects">projects</a>, <a href="https://drive.google.com/file/d/1pO-Fs53qPmDtXdhcTvpYBlrvDpNc4m6_/view?usp=sharing" target='_blank' rel='noopener'>resume</a>, or <a href="/contact">contact me</a> if you'd like to get in touch.</div>
      </div>
      <img src={hello} alt="a black outline of someone's hands coding on a laptop with orange flowers and a coding symbol on the laptop's screen." />
    </section>
  );
}

export default Home;