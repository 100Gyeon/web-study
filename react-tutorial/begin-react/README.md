# 모던 리액트

## 💡 What I Learned
- Virtual DOM : 메모리에 가상으로 존재하는 DOM  
  [동작 원리]  
  업데이트가 필요한 UI를 메모리에 있는 Virtual DOM에 렌더링 👉 브라우저에 실제로 보여지고 있는 DOM과 Virtual DOM을 비교 👉 차이점을 감지하고 나서 실제 DOM에 패치

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