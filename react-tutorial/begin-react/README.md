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
  const [number, setNumber] = useState(0); // useState(0)처럼 상태의 기본값을 파라미터로 넣어서 호출
  ```
  - useState를 통해서 바뀌는 값을 관리할 수 있음  
    하지만 setState를 호출할 때마다 컴포넌트가 리렌더링 되기 때문에  
    굳이 렌더링 할 필요가 없는 값을 관리할 경우, useRef를 사용하면 된다.
  - useState를 사용해서 여러 개의 input 값을 관리할 수 있다.
    ```javascript
    const [inputs, setInputs] = useState({
      username: '',
      email: '',
    });
    const { username, email } = inputs;
    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };
    ```

- 리액트에서 객체 업데이트 하기
  1. spread 연산자 사용해서 기존 객체 복사
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

- useRef로 컴포넌트 안의 변수 만들기  
  Q. 주로 어떤 값을 관리할 때 useRef를 사용할까?
  - setTimeout, setInterval의 id
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll 위치

- 리액트에서 배열에 항목 추가하기
  - spread 연산자를 사용하는 방법
    ```javascript
    setUsers([...users, user]);
    ```
  - concat 함수를 사용하는 방법
    ```javascript
    setUsers(users.concat(user));
    ```