import React, { Component } from 'react';

class HelloWorld extends Component {
  state = {
    who: 'World'
  };

  render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}</p>
        <br />
        <button onClick={() => this.setState({ who: 'World' })}>World</button>
        <br />
        <button onClick={() => this.setState({ who: 'Friend' })}>Friend</button>
        <br />
        <button onClick={() => this.setState({ who: 'React' })}>React</button>
      </div>
    );
  }
}

export default HelloWorld;