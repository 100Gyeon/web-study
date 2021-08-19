# 모던 리액트

## 💡 What I Learned
- Virtual DOM : 메모리에 가상으로 존재하는 DOM  
  [동작 원리]  
  1. 업데이트가 필요한 UI를 메모리에 있는 Virtual DOM에 렌더링
  1. 브라우저에 실제로 보여지고 있는 DOM과 Virtual DOM을 비교
  1. 차이점을 감지하고 나서 실제 DOM에 패치

- component : UI 조각  
  클래스, 함수 형태로 컴포넌트 작성할 수 있음  
  컴포넌트 이름은 대문자로 시작  

- JSX
  - 두 개 이상의 태그는 무조건 하나의 태그로 감싸주어야 한다. 아래처럼 비어있는 태그 fragment를 활용.
    ```javascript
    function App() {
      return (
        <>
          <Hello />
          <div>안녕히계세요.</div>
        </>
      );
    }
    ```
  - JSX 내부에서 자바스크립트 값을 보여주고 싶을 때, 중괄호로 감싸주면 된다.
    ```javascript
    function App() {
      const name = 'react';
      return (
        <>
          <Hello />
          <div>{name}</div>
        </>
      );
    }
    ```
  - JSX에서는 style을 설정할 때 class가 아닌 className을 사용
    ```javascript
    function App() {
      return (
        <>
          {/* 주석 작성 예시 */}
          <Hello
            // 주석 작성 예시
          />
          <div className="gray-box"></div>
        </>
      );
    }
    ```

- props : 컴포넌트에게 특정 값을 전달해주고 싶을 때 사용하는 것

- 이벤트 적용하기 : onClick, onChange처럼 대문자로 시작
  ```javascript
  return (
    <div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
  ```

- useState가 호출되었을 때는 배열을 반환하게 된다.  
  const [현재 상태, 상태를 바꾸는 함수] = useState(기본값);  
  ```javascript
  const [number, setNumber] = useState(0);
  ```
  useState를 사용할 때는 상태의 기본값을 파라미터로 넣어서 호출  
  useState를 통해서 바뀌는 값을 관리할 수 있음

- 리액트에서 객체 업데이트 하기
  1. spread 문법 사용해서 기존 객체 복사
  1. 특정 값을 덮어씌움
  ```javascript
  setInputs({
    ...inputs, // 기존의 input 객체를 복사한 뒤
    [name]: value, // name 키를 가진 값을 value로 설정
  });
  ```

- useRef로 특정 DOM 선택하기
  ```javascript
  import React, { useRef } from 'react'; // useRef 불러오기
  ...
  const nameInput = useRef(); // useRef 호출해 객체 만들기
  nameInput.current.focus(); // 객체명.current는 내가 선택하고 싶은 객체를 가리키고 있음
  ...
  // ref를 원하는 DOM에 설정
  return (
    <div>
      <input ref={nameInput}>
    </div>
  );
  ```