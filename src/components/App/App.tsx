// import { useState } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills'

function App() {
  return (
    <main>
      <Nav />
      {/* <Home />
      <About /> */}
      <Skills />
    </main>
  );
}

export default App;
