import React from 'react';
import Hello from './Hello'; // 자신의 디렉터리에 있는 Hello라는 컴포넌트를 불러오겠다. (상대경로)
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      {/* 주석 작성 방법 */}
      <Hello
        // 여기도 주석 작성 가능
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
