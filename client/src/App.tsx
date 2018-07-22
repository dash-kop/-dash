import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public state = {
    test: 'Hallo'
  }

  public render() {
    const click = () => {
      this.setState({
        test: 'World!'
      })
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.test}
        </p>
        <button onClick={click}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
