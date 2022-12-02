import './Lacey.css';

const lacey1 = require('../../assets/lacey/lacey.png');
const lacey2 = require('../../assets/lacey/lacey2.png');
const lacey3 = require('../../assets/lacey/lacey3.png');
const lacey5 = require('../../assets/lacey/lacey5.png');
const laceyObj = require('../../assets/lacey/lacey-obj.png');


function Lacey() {
  return (
    <section className="lacey-section">
      <div className="lacey-header">
        <img className="lacey-obj" src={laceyObj} alt="information about Lacey in an object, name: Lacey, age: 2, favorite game: tug-of-war" />
        <img className="lacey-header-img" src={lacey3} alt="Lacey laying on her back and smiling up at you" />
      </div>
      <div className="lacey-imgs">
        <img src={lacey1} alt="Lacey laying on her back with t-rex paws, ready for belly rubs" />
        <img src={lacey2} alt="Lacey with stuffed animal stuffing in her mouth, looking at you, ready to play!" />
        <img src={lacey5} alt="Lacey resting her head on a gray blanket, ready for snuggles" />
      </div>
    </section>
  );
}

export default Lacey;