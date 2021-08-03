import React from 'react';

// 클래스, 함수 형태로 컴포넌트 작성
// 컴포넌트 이름은 대문자로 시작
function Hello({ color, name }) {
  return <div style={{
    color
  }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
  name: '이름없음'
}
// Hello라는 컴포넌트를 만들어서 내보냄
export default Hello;