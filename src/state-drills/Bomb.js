import React, { Component } from 'react';

class Bomb extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {

    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      console.log('tick')
    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'Boom!';
    }
    else if (count % 2 === 0) {
      return 'Tick';
    }
    else {
      return 'Tock'
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
      </div>
    )
  }

}




export default Bomb;
