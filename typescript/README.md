# TypeScript

## 💡 What I Learned
### 목차
1. [기본 타입](#1-기본-타입)
2. [Interface](#2-Interface) 

---

### 1. 기본 타입
- `Boolean`, `Number`, `String`, `Object`, `Array`, `Tuple`, `Enum`, `Any`, `Void`, `Null`, `Undefined`, `Never`

  ```typescript
  let isDone: boolean = false;
  let decimal: number = 6;
  let color: string = "blue";
  let employee: object;
  employee = {
      name: gildong,
      age: 23,
      jobTitle: 'Web Developer'
  };
  let arr: number[] = [1, 2, 3];
  let arr: Array<number> = [1, 2, 3];
  let tuple: [string, number] = ['hi', 10];
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  let notSure: any = 4;
  notSure = 'maybe a string instead';
  notSure = false;
  function warnUser(): void {
    console.log('This is my warning message');
  }
  // null과 undefined는 다른 모든 타입의 하위 타입
  let u: undefined = undefined;
  let n: null = null;
  // never 타입은 절대 발생할 수 없는 타입
  // never는 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는, 끝에 도달하지 않는 타입으로 쓰인다.
  function error(message: string): never {
    throw new Error(message);
  }
  ```

### 2. Interface
- 인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미한다. 
- 타입스크립트에서의 인터페이스는 보통 다음과 같은 범주에 대해 약속을 정의할 수 있다.
  - (1) 객체의 스펙(속성과 속성의 타입)
  - (2) 함수의 스펙(파라미터, 반환 타입 등)  
    함수 타입을 인터페이스로 정의하는 경우, 호출 시그니처(Call signature)를 사용한다.  
    호출 시그니처는 다음과 같이 함수의 매개 변수(parameter)와 반환 타입을 지정한다.
    ```typescript
    interface IName {
      (PARAMETER: PARAM_TYPE): RETURN_TYPE // Call signature
    }
    ```
  - (3) 배열과 객체를 접근하는 방식
  - (4) 클래스 : 인터페이스로 클래스를 정의하는 경우, implements 키워드를 사용한다.
- 인터페이스를 인자로 받아 사용할 때 항상 `인터페이스의 속성 개수`와 `인자로 받는 객체의 속성 개수`를 일치시키지 않아도 된다.  
  다시 말해, 인터페이스에 정의된 `속성`, `타입`의 조건만 만족한다면 객체의 속성 개수가 더 많아도 상관없다는 의미다.  
  또한, 인터페이스에 선언된 속성 순서를 지키지 않아도 된다.
- ```typescript
  interface 인터페이스_이름 {
    속성?: 타입; // 속성에 ?를 사용하면 선택적 속성으로 정의할 수 있다.
  }
  ```
- 일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능하다. 프로퍼티 이름 앞에 `readonly`를 넣어서 이를 지정할 수 있다.
- 클래스처럼 인터페이스도 확장(extends)이 가능하다.  
  인터페이스 타입이 클래스 타입을 extends하면, 클래스의 멤버는 상속받지만 구현은 상속받지 않는다.
