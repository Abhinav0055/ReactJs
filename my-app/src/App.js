import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Component2 from './components/Component2';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode == 'light') {
      setmode('dark')
    }
    else {
      setmode('light')
    }
  }
  return (



    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
      <Navbar title="Chandigarh University" abouttxt="About CU" mode={mode} setmode={setmode} toggleMode={toggleMode}/>
      <Component2/>
      </>

  );
}

export default App;
