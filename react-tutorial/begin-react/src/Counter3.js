import React, { Component } from 'react';

class Counter3 extends Component {
  // 클래스형 컴포넌트의 state는 무조건 객체 형태
  state = {
    counter: 0,
    fixed: 1,
  }

  handleIncrease = () => {
    // 아래 코드는 setState를 2번 작성해도 실제로 2가 더해지지 않는다.
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    // setState의 함수형 업데이트
    // 함수형 업데이트는 한 함수에서 여러 번에 걸쳐서 setState를 쓰는 경우에 사용하면 유용
    // 아래 코드는 setState를 2번 작성하면 값이 2씩 더해진다.
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        {/* render 메서드에서 state를 조회하려면 this.state를 사용해야 한다. */}
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>{this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter3;