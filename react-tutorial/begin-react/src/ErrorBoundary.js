import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 사전에 예외처리를 하지 않은 에러가 있을 때
  // 사용자에게 에러가 발생했다고 알려주는 작업을 할 수 있음
  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다!');
    console.log({
      error, // 어떤 에러인지 (에러의 내용)
      info // 어디에서 에러가 발생했는지 (에러가 발생한 위치)
    });
    this.setState({
      error: true,
    })
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

/*
  <ErrorBoundary>
    <User />
  </ErrorBoundary>
*/