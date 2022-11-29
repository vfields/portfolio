import './Home.css';

const hello = require('../../assets/hello.png');

function Home() {
  return (
    <section className="home">
      <div className="intro-container">
        <h1>Hi, I'm Tori.</h1>
        <h1 className="engineer">I'm a software engineer.</h1>
        <div className="intro">Nice to meet you! Check out my projects, resume, or contact me if you'd like to get in touch.</div>
      </div>
      <img src={hello} alt="a black outline of someone's hands coding on a laptop with orange flowers and a coding symbol on the laptop's screen." />
    </section>
  );
}

export default Home;