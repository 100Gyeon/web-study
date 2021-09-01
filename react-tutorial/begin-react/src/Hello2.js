import React, { Component } from 'react';

class Hello2 extends Component {
  // defaultProps는 클래스 내부에 static 키워드와 함께 선언할 수도 있다.
  // 혹은 아래 Hello2.defaultProps 부분처럼 해도 된다. (함수형 컴포넌트 때랑 똑같음)
  static defaultProps = {
    name: '이름없음',
  };

  // 클래스형 컴포넌트에서는 render() 메서드가 꼭 있어야 한다.
  render() {
    // props를 조회할 때에는 this.props를 조회하면 된다.
    const { color, isSpecial, name } = this.props;

    // 렌더링하고 싶은 JSX를 반환
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// Hello2.defaultProps = {
//   name: '이름없음'
// }

export default Hello2;