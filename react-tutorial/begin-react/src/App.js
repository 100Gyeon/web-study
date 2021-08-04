import React from 'react';
import Hello from './Hello'; // 자신의 디렉터리에 있는 Hello라는 컴포넌트를 불러오겠다. (상대경로)
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
