import React, { useState } from 'react';

function Counter() {
  // useState를 통해서 바뀌는 값을 관리할 수 있음
  // const [현재 상태, 상태를 바꾸는 함수] = useState(기본값);
  // useState를 사용할 때는 상태의 기본값을 파라미터로 넣어서 호출

  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1); // 함수형 업데이트 (성능 최적화)
  }
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;