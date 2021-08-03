import React from 'react';
import Hello from './Hello'; // 자신의 디렉터리에 있는 Hello라는 컴포넌트를 불러오겠다. (상대경로)

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
