import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
  const text = useContext(MyContext);
  // Child 컴포넌트에서 useContext를 사용해서 MyContext에 있는 값을 그대로 불러와 사용한다.
  return <div>안녕하세요? {text}</div>
}

function Parent() {
  return <Child />
}

function GrandParent() {
  return <Parent />
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    // MyContext.Provider를 통해서 value 값을 설정
    <MyContext.Provider value={value ? 'Good' : 'Bad'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>Click me</button>
    </MyContext.Provider>
  )
}

export default ContextSample;