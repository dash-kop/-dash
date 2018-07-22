import * as React from 'react';

export class Counter extends React.Component {
  public state = {
    test: 0
  }

  public render() {
    const clickGenerator = (n:number) => () => {
      this.setState({
        test: this.state.test+n
      })
    }
    return (
      <div className="Counter">
        <p className="Counter-intro">
          {this.state.test}
        </p>
        <button onClick={clickGenerator(1)}>
          Click Me
        </button>
        <button onClick={clickGenerator(10)}>
          Ten times!
         </button>
      </div>
    );
  }
}
