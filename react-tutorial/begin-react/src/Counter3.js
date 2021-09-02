import React, { Component } from 'react';

class Counter3 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0
  //   };
  // }

  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1,
    }
  }

  handleIncrease = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>{this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter3;