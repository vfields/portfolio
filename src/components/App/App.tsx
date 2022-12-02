import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Lacey from '../Lacey/Lacey';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import BadUrl from '../BadUrl/BadUrl';

function App() {
  return (
    <main>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/lacey'>
          <Lacey />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/skills'>
          <Skills />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route component={BadUrl} />
      </Switch>
    </main>
  );
}

export default App;
