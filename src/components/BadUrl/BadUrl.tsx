import './BadUrl.css';

const lacey = require('../../assets/lacey.png');

function BadUrl() {
  return (
    <section className="bad-url-section">
      <h1>Uh oh!</h1>
      <img src={lacey} alt="Tori's dog Lacey wearing her pink vest in a creek on a hike" />
      <h2>That's not a valid URL.</h2>
      <p>You did find a picture of Lacey, Tori's dog, though! Try going <a href="/">home</a> or another address.</p>
    </section>
  );
}

export default BadUrl;