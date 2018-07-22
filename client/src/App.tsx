import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Counter } from './Counter'
import { Gadget } from './Gadget'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Gadget top={80} left={40} height={200} width={400} >
        <Counter />
      </Gadget>
      <Gadget top={100} left={40} height={200} width={400} >
        <Counter />
      </Gadget>
    </div>
  );
}
