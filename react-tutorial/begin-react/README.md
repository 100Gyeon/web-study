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
      const name = "react";
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
  );
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
      username: "",
      email: "",
    });
    const { username, email } = inputs;
    const onChange = (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
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

  - **spread** 연산자를 사용하는 방법
    ```javascript
    setUsers([...users, user]);
    ```
  - **concat** 함수를 사용하는 방법
    ```javascript
    setUsers(users.concat(user));
    ```

- 리액트에서 배열의 항목 제거하기 : **filter**
  ```javascript
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  ```

- 리액트에서 배열의 항목 수정하기 : **map**
  ```javascript
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
        ? { ...user, active: !user.active }
        : user,
      ),
    );
  };
  ```

- **useEffect** Hook  
  첫 번째 파라미터에는 함수 등록  
  두 번째 파라미터에는 deps라는 배열 등록  
  리액트 컴포넌트가 처음 화면에 나타날 때(mount), 사라질 때(unmount) 특정 작업을 처리할 수 있다.  
  컴포넌트의 props나 상태가 바뀌어서 업데이트 될 때도 특정 작업을 처리할 수 있다.

  - mount 시에 하는 작업들
    1. props로 받은 값을 컴포넌트의 로컬 상태로 설정
    1. 외부 API 요청 (REST API 등)
    1. 라이브러리 사용 (D3, Video.js 등)
    1. setInterval을 통한 반복 작업 혹은 setTimeout을 통한 작업 예약
  - unmount 시에 하는 작업들
    1. setInterval, setTimeout을 사용하여 등록한 작업들 제거하기 (clearInterval, clearTimeout)
    1. 라이브러리 인스턴스 제거

  ```javascript
  function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  useEffect(() => {
    // 컴포넌트가 처음 화면에 나타날 때 호출 (mount)
    console.log('user 값이 설정됨');
    console.log(user);
    return () => { // 컴포넌트가 사라질 때 호출 (unmount)
      console.log('user 값이 바뀌기 전');
      console.log(user);
    }
  }, [user]);
  ...
  ```

  useEffect에 등록한 함수에서  
  (1) props로 받아온 값을 참조하거나,  
  (2) useState로 관리하고 있는 값을 참조하는 경우,  
  => useEffect의 deps에 넣어야 한다.  
  그렇지 않으면 useEffect에 등록한 함수가 실행될 때 최신 props/상태를 가리키지 않는다.

- **useMemo** Hook  
  성능 최적화를 위하여 useMemo를 통해 연산된 값을 재사용

  ```javascript
  const count = useMemo(() => countActiveUsers(users), [users]);
  ```

  useMemo의 첫 번째 파라미터에는 어떻게 연산할지 정의하는 함수를, 두 번째 파라미터에는 deps 배열을 넣어주면 된다.  
  이 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해 준다.  
  만약에 배열 안에 넣은 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 된다.

- **useCallback** Hook  
  특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용

  ```javascript
  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );
  ```

  함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭 deps 배열에 포함시켜야 된다.  
  props로 받아온 함수가 있다면, 이 또한 deps에 넣어야 한다.

- **React.memo**  
  컴포넌트의 props가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화  
  컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링 하도록 설정할 수 있음

  ```javascript
  export default React.memo(
    UserList,
    (prevProps, nextProps) => prevProps.users === nextProps.users
  );
  ```

  React.memo에서 두 번째 파라미터에 propsAreEqual 함수를 사용하여 특정 값들만 비교 가능

- **useReducer** Hook  
  상태를 관리할 때 useState 말고 useReducer를 사용할 수 있다.  
  컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.  
  상태 업데이트 로직을 컴포넌트 바깥에 작성할 수도 있고, 심지어 다른 파일에 작성하고 불러와서 사용할 수도 있다.

  ```javascript
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        throw new Error("Unhandled action");
    }
  }
  ```

  reducer는 현재 상태(state)와 액션 객체(action)를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.  
  reducer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.  
  <useReducer 사용법>

  ```javascript
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

  state는 앞으로 컴포넌트에서 사용할 수 있는 상태, dispatch는 액션을 발생시키는 함수다.  
  useReducer에 넣는 첫 번째 파라미터는 reducer 함수이고, 두 번째 파라미터는 초기 상태다.

- useReducer vs useState  
  컴포넌트에서 관리하는 값이 딱 하나고, 그 값이 단순한 숫자/문자열/boolean 값이라면 useState로 관리하는게 편할 것  
  컴포넌트에서 관리하는 값이 여러 개가 되어서 상태의 구조가 복잡해진다면, useReducer로 관리하는 것이 편할 수도 있다.

- 커스텀 Hooks  
  **use**라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성 (ex. useInputs.js)  
  useState, useEffect, useReducer, useCallback 등 Hooks를 사용하여 원하는 기능을 구현하고, 컴포넌트에서 사용하고 싶은 값들을 반환해 주면 된다.  
  반복되는 로직을 쉽게 재사용할 수 있다.

- Context API를 사용한 전역 값 관리  
  프로젝트 안에서 전역적으로 사용하는 값 관리 가능

  ```javascript
  const MyContext = createContext("defaultValue");
  ```

  - Context를 만들 때는 React.createContext() 함수를 사용
  - ('defaultValue')처럼 파라미터에는 기본값이 들어감
  - 기본값이란, Provider라는 컴포넌트가 사용되지 않았을 때의 값
  - 값을 직접 설정하고 싶다면 value 값을 설정해야 함
    ```javascript
    <MyContext.Provider value="Good">
      <GrandParent />
    </MyContext.Provider>
    ```
  - <u>여러 컴포넌트를 거쳐서 특정 함수를 전달해야 하는 일이 있다면, dispatch를 관리하는 context를 만들면 된다!</u>  
    필요한 곳에서 바로 dispatch를 불러와서 사용하면 구조가 깔끔하고, 코드 작성이 쉬워짐

  ```javascript
  // UserDispatch를 만들고 내보내주는 작업
  export const UserDispatch = React.createContext(null);
  // 불러와 사용할 때
  import { UserDispatch } from "./App";
  ```

- **useContext** Hook  
  context를 컴포넌트 내부에서 바로 조회할 수 있게 해 주는 Hook

  ```javascript
  // useContext를 사용해서 우리가 만든 UserDispatch Context를 조회
  const dispatch = useContext(UserDispatch);
  ```

- immer  
  immer를 사용하면 불변성을 해치는 코드를 작성해도 불변성을 유지할 수 있다.

  ```
  $ npm i immer
  import produce from 'immer'; // 보통 produce라는 이름으로 immer를 불러온다.
  ```

  <produce 함수를 사용할 때>  
  첫 번째 파라미터에는 **수정하고 싶은 상태**, 두 번째 파라미터에는 **어떻게 업데이트하고 싶은지 정의하는 함수**를 넣어준다.  
  두 번째 파라미터에 넣는 함수에서는 불변성을 신경 쓰지 않고 그냥 업데이트하면 다 알아서 해준다.

  ```javascript
  const state = {
    number: 1,
    dontChangeMe: 2,
  };

  const nextState = produce(state, (draft) => {
    draft.number += 1;
  });

  console.log(nextState); // { number: 2, dontChangeMe: 2 }
  ```

- 클래스형 컴포넌트

  - 커스텀 메서드  
    클래스에서 커스텀 메서드를 만들게 될 때는 보통 **handle...** 이라고 이름 짓는다.  
    커스텀 메서드를 선언할 때 **화살표 함수**를 사용하면,  
    메서드와 컴포넌트 인스턴스의 관계가 끊기는 문제(= this가 조회되지 않는 문제)를 해결할 수 있다.

    ```javascript
    class Counter extends Component {
      handleIncrease = () => {
        console.log("increase");
      };

      handleDecrease = () => {
        console.log("decrease");
      };

      render() {
        return (
          <div>
            <button onClick={this.handleIncrease}>+1</button>
            <button onClick={this.handleDecrease}>-1</button>
          </div>
        );
      }
    }

    export default Counter;
    ```

  - 클래스형 컴포넌트의 state는 무조건 객체 형태
  - render()에서 state를 조회하려면 this.state를 사용
  - 상태를 업데이트 할 때는 this.setState 함수를 사용  
    setState는 단순히 상태를 바꾸는 함수가 아니라, <u>상태로 바꿔달라고 요청</u>해 주는 함수

- LifeCycle Method  
  컴포넌트가 브라우저상에 <u>나타나고, 업데이트되고, 사라질 때</u> 호출되는 메서드  
  클래스형 컴포넌트에서만 사용할 수 있음  
  componentDidMount, componentDidUpdate, componentWillUnmount 같은 경우는 함수형 컴포넌트에서 useEffect를 통해서 충분히 할 수 있는 작업  
  [참고](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
