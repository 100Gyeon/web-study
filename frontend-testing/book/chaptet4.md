# 4장. 목 객체

## 목 객체를 사용하는 이유

취득한 데이터 대역으로 목 객체 사용  
목 객체를 상황에 따라 세분화한 명칭 : 스텁(stub), 스파이(spy)

### 1. 스텁 = 대역

- 의존 중인 컴포넌트의 대역
- 정해진 값을 반환하는 용도
- 테스트 대상에 입력값 할당

### 2. 스파이 = 기록

- 함수 호출 기록
- 호출된 횟수 혹은 실행 시 사용한 인수 기록
- 테스트 대상의 출력 확인

## 목 모듈을 활용한 스텁

미구현된 모듈에 의존 중인 경우, 해당 모듈을 스텁으로 대체하면 된다.

`jest.mock`이 테스트 전에 호출되면 테스트할 모듈을 대체한다.

```typescript
import { greet } from './greet';

jest.mock('./greet');

test('인사말을 반환하지 않는다(원래 구현과 다르게)', () => {
  expect(greet('Taro')).toBe(undefined);
});
```

`jest.mock`의 두 번째 인수에는 대체할 함수를 구현할 수 있다.

```typescript
import { greet, sayGoodBye } from './greet';

// 두 번째 인수에 대체할 함수 구현한 예시
jest.mock('./greet', () => ({
  // 대체한 구현부에 greet 함수는 구현되지 않아 undefined 반환
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test('인사말이 구현되어 있지 않다(원래 구현과 다르게)', () => {
  expect(greet).toBe(undefined);
});

test('작별 인사를 반환한다(원래 구현과 다르게)', () => {
  const message = `${sayGoodBye('Taro')} See you.`;
  expect(message).toBe('Good bye, Taro. See you.');
});
```

모듈 일부만 스텁으로 대체하기 위해서는 `jest.requireActual`을 사용하면 된다.

```typescript
import { greet, sayGoodBye } from './greet';

// jest.requireActual을 통해 기존에 구현된 greet 함수는 import하고 sayGoodBye만 대체
jest.mock('./greet', () => ({
  ...jest.requireActual('./greet'),
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test('인사말을 반환한다(원래 구현대로)', () => {
  expect(greet('Taro')).toBe('Hello! Taro.');
});

test('작별 인사를 반환한다(원래 구현과 다르게)', () => {
  const message = `${sayGoodBye('Taro')} See you.`;
  expect(message).toBe('Good bye, Taro. See you.');
});
```

### 라이브러리 대체하기

실무에서는 라이브러리를 대체할 때 목 모듈을 많이 사용한다.

```typescript
// next/router라는 의존 모듈 대신 next-router-mock 적용
jest.mock('next/router', () => require('next-router-mock'));
```

모듈을 불러오는 방법에는 ESM과 CJS가 있는데, `import`를 사용하는 ESM의 경우 **테스트 전에 `jest.mock`을 호출한다.**

## 웹 API 목 객체 기초

[예제 코드](https://github.com/frontend-testing-book-kr/unittest/tree/main/src/04/04)

웹 API 요청이 발생하는 함수를 스텁으로 대체하면  
실제 서버의 응답 여부와 상관없이 데이터 취득과 관련된 로직을 테스트할 수 있다.

```typescript
jest.spyOn(테스트할 객체, 테스트할 함수);
jest.spyOn(객체, 함수).mockResolvedValueOnce(성공 응답 객체);
jest.spyOn(객체, 함수).mockRejectedValueOnce(오류 객체);
```

[예제 코드](https://github.com/frontend-testing-book-kr/unittest/tree/main/src/04/03)

## 웹 API 목 객체 생성 함수

[예제 코드](https://github.com/frontend-testing-book-kr/unittest/tree/main/src/04/04)

함수 응답을 재현할 테스트용 데이터(= [fixture](https://github.com/frontend-testing-book-kr/unittest/blob/main/src/04/fetchers/fixtures.ts)) 생성

## 목 함수를 사용하는 스파이

[예제 코드](https://github.com/frontend-testing-book-kr/unittest/tree/main/src/04/05)

`jest.fn`을 사용해 목 함수를 작성한다. 관련 matcher는 아래와 같다.

- toBeCalled : 실행 여부 검증
- toHaveBeenCalledTimes : 호출 횟수 검증
- toHaveBeenCalledWith : 실행 시 인수 검증 (원시형 아니더라도 배열, 객체 다 가능)
  - expect.objectContaining : 객체가 너무 큰 경우 보조함수를 사용하면 객체 일부만 검증 가능

## 웹 API 목 객체의 세부 사항

[예제 코드](https://github.com/frontend-testing-book-kr/unittest/tree/main/src/04/06)

- toHaveBeenCalled : 목 함수가 호출됐는지 검증하는 matcher

## 현재 시각에 의존하는 테스트

[예제 코드](https://github.com/frontend-testing-book-kr/unittest/tree/main/src/04/07)

테스트 결과가 실행 시각에 의존하는 경우, 특정 시간대에는 CI의 테스트 자동화가 실패하는 불안정한 테스트가 된다.  
테스트 실행 환경의 현재 시각을 고정하면 언제 실행하더라도 같은 결과를 얻을 수 있다.  
현재 시각을 임의로 고정하려면 다음과 같은 함수를 사용하면 된다.

- `jest.useFakeTimers` : 가짜 타이머 사용하도록 지시하는 함수
- `jest.setSystemTime` : 가짜 타이머에 사용할 현재 시각을 설정하는 함수
- `jest.useRealTimers` : 실제 타이머를 사용하도록 지시하는 원상 복귀 함수

테스트를 실행하기 전에 공통으로 설정할 작업이 있거나, 종료 후 공통으로 파기하고 싶은 작업이 있는 경우  
설정 작업은 `beforeAll`, `beforeEach`, 파기 작업은 `afterAll`, `afterEach`를 사용할 수 있다.

```typescript
describe('greetByTime(', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("아침에는 '좋은 아침입니다'를 반환한다", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 8, 0, 0));
    expect(greetByTime()).toBe('좋은 아침입니다');
  });

  test("점심에는 '식사는 하셨나요'를 반환한다", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 14, 0, 0));
    expect(greetByTime()).toBe('식사는 하셨나요');
  });

  test("저녁에는 '좋은 밤 되세요'를 반환한다", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 21, 0, 0));
    expect(greetByTime()).toBe('좋은 밤 되세요');
  });
});
```
