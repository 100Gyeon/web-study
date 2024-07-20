# 3장. 처음 시작하는 단위 테스트

## 테스트 구성 요소

테스트는 구성 파일에 작성하지 않고 별도의 파일을 만들어 테스트 대상을 import로 불러와서 테스트한다.  
ex. `파일명.ts` -> `파일명.test.ts`

테스트 파일을 반드시 구현 파일과 같은 디렉터리 안에 둘 필요는 없다.  
저장소 최상위에 `__test__`라는 디렉터리를 만들고 이 디렉터리 안에 있는 테스트 파일들을 테스트하는 방식도 많이 사용한다.

테스트는 jest가 제공하는 API인 `test` 함수로 정의한다.  
`test` 함수는 2개의 매개변수를 받는다.

```typescript
test(테스트명, 테스트 함수);
```

- 테스트명에는 테스트 내용을 잘 나타내는 제목을 설정한다.
- 테스트 함수에는 단언문을 작성한다. 단언문은 검증값이 기댓값과 일치하는지 검증하는 문이다.

```typescript
// 등가 비교 matcher인 toBe 사용한 예시
test('1 + 2 = 3', () => {
  expect(검증값).toBe(기댓값);
});
```

- 단언문은 `expect` 함수와 이에 덧붙이는 `matcher`로 구성되어 있다.
- 단언문 : `expect(검증값).toBe(기댓값)`
- matcher : `toBe(기댓값)`

연관성 있는 테스트들을 그룹화하고 싶을 때는 `describe` 함수를 사용한다.  
`describe` 함수는 `test` 함수와 유사하게 `describe(그룹명, 그룹 함수)` 형식, 즉 2개의 매개변수로 구성된다.  
`test`함수는 중첩시킬 수 없지만, `describe` 함수는 중첩이 가능하다.

```typescript
// 사칙연산 테스트를 그룹화
describe('사칙연산', () => {
  // add 함수의 테스트를 그룹화
  describe('add', () => {
    test('1 + 1은 2', () => {
      expect(add(1, 1)).toBe(2);
    });
    test('1 + 2는 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  // sub 함수의 테스트를 그룹화
  describe('sub', () => {
    test('1 - 1은 0', () => {
      expect(sub(1, 1)).toBe(0);
    });
    test('2 - 1은 1', () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
});
```

## 테스트 실행 방법

### 명령줄 인터페이스로 실행

- 제스트가 설치된 프로젝트의 package.json에 npm script 추가
- `npm test` 커맨드로 모든 테스트 실행

파일 경로를 지정하면 지정된 테스트 파일만 실행 가능하다.

```bash
npm test 'src/example/index.test.ts'
```

### 제스트 러너로 실행

파일 경로를 터미널에 직접 입력해서 실행하면 번거롭고, 파일명도 틀리기 쉽다.  
개별 파일 실행을 쉽게 도와주는 extension [vscode-jest-runner](https://github.com/firsttris/vscode-jest-runner)를 추천한다.

## 용도별 matcher

https://jestjs.io/docs/using-matchers

단언문은 테스트 대상이 기댓값과 일치하는지 matcher로 검증한다.  
테스트 검증에 사용하는 다양한 matcher를 살펴보자.
|진릿값|수치|문자열|배열|객체|
|:-:|:-:|:-:|:-:|:-:|
|toBeTruthy, toBeFalsy, toBeNull, toBeUndefined|toEqual, toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBeCloseTo|toContain, toMatch, toHaveLength, stringContaining, stringMatching|toContain, toHaveLength, toContainEqual, arrayContaining|toMatchObject, toHaveProperty, objectContaining|

### 진릿값 검증

- toBeTruthy, toBeFalsy
- toBeNull, toBeUndefined

```typescript
describe('진릿값 검증', () => {
  test('참인 진릿값 검증', () => {
    expect(1).toBeTruthy();
    expect('1').toBeTruthy();
    expect(true).toBeTruthy();
    expect(0).not.toBeTruthy();
    expect('').not.toBeTruthy();
    expect(false).not.toBeTruthy();
  });

  test('거짓인 진릿값 검증', () => {
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
    expect(1).not.toBeFalsy();
    expect('1').not.toBeFalsy();
    expect(true).not.toBeFalsy();
  });

  // null과 undefined는 toBeFalsy와 일치함
  // null인지, undefined인지 검증하고 싶을 때 toBeNull, toBeUndefined 사용
  test('null과 undefined 검증', () => {
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(undefined).not.toBeDefined();
  });
});
```

### 수치 검증

- toEqual
- toBeGreaterThan, toBeGreaterThanOrEqual
- toBeLessThan, toBeLessThanOrEqual
- toBeCloseTo

```typescript
describe('수치 검증', () => {
  const value = 2 + 2;

  test('검증값이 기댓값과 일치한다', () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('검증값이 기댓값보다 크다', () => {
    expect(value).toBeGreaterThan(3); // 4 > 3
    expect(value).toBeGreaterThanOrEqual(4); // 4 >= 4
  });

  test('검증값이 기댓값보다 작다', () => {
    expect(value).toBeLessThan(5); // 4 < 5
    expect(value).toBeLessThanOrEqual(4); // 4 <= 4
  });

  // 자바스크립트는 소수 계산에 오차가 있다.
  // 따라서 소숫값을 검증할 때는 toBeCloseTo matcher를 사용한다.
  test('소수 계산은 정확하지 않다', () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  });

  // 두 번째 인수에는 몇 자릿수까지 비교할 것인지 지정하는 것도 가능하다. (기본값은 2)
  test('소수 계산 시 지정한 자릿수까지 비교한다', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16);
  });
});
```

### 문자열 검증

- toContain
- toMatch
- toHaveLength
- stringContaining
- stringMatching

```typescript
describe('문자열 검증', () => {
  const str = 'Hello World';
  const obj = { status: 200, message: str };

  test('검증값이 기댓값과 일치한다', () => {
    expect(str).toBe('Hello World');
    expect(str).toEqual('Hello World');
  });

  // 문자열 일부가 일치하는지 검증
  test('toContain', () => {
    expect(str).toContain('World');
    expect(str).not.toContain('Bye');
  });

  // 정규표현식 검증
  test('toMatch', () => {
    expect(str).toMatch(/World/);
    expect(str).not.toMatch(/Bye/);
  });

  // 문자열 길이 검증
  test('toHaveLength', () => {
    expect(str).toHaveLength(11);
    expect(str).not.toHaveLength(12);
  });

  // stringContaining, stringMatching은 객체에 포함된 문자열을 검증할 때 사용
  // 검증할 객체의 property에 기댓값으로 지정한 문자열이 포함되면 테스트 성공
  test('stringContaining', () => {
    expect(obj).toEqual({
      status: 200,
      message: expect.stringContaining('World'),
    });
  });
  test('stringMatching', () => {
    expect(obj).toEqual({
      status: 200,
      message: expect.stringMatching(/World/),
    });
  });
});
```

### 배열 검증

- toContain
- toHaveLength
- toContainEqual
- arrayContaining

```typescript
describe('배열 검증', () => {
  describe('원시형 값들로 구성된 배열', () => {
    const tags = ['Jest', 'Storybook', 'Playwright', 'React', 'Next.js'];

    test('toContain', () => {
      expect(tags).toContain('Jest');
      expect(tags).toHaveLength(5);
    });
  });

  describe('객체들로 구성된 배열', () => {
    const article1 = { author: 'taro', title: 'Testing Next.js' };
    const article2 = { author: 'jiro', title: 'Storybook play function' };
    const article3 = { author: 'hanako', title: 'Visual Regression Testing' };
    const articles = [article1, article2, article3];

    // 배열에 특정 객체가 포함됐는지 확인
    test('toContainEqual', () => {
      expect(articles).toContainEqual(article1);
    });

    // arrayContaining 인수로 넘겨준 배열의 요소들이 전부 포함돼 있어야 테스트 성공
    test('arrayContaining', () => {
      expect(articles).toEqual(expect.arrayContaining([article1, article3]));
    });
  });
});
```

### 객체 검증

- toMatchObject
- toHaveProperty
- objectContaining

```typescript
describe('객체 검증', () => {
  const author = { name: 'taroyamada', age: 38 };
  const article = {
    title: 'Testing with Jest',
    author,
  };

  // 부분적으로 property 일치하면 성공, 일치하지 않으면 실패
  test('toMatchObject', () => {
    expect(author).toMatchObject({ name: 'taroyamada', age: 38 });
    expect(author).toMatchObject({ name: 'taroyamada' }); // 부분적으로 일치
    expect(author).not.toMatchObject({ gender: 'man' }); // 일치하지 않는 property 존재
  });

  // 객체에 특정 property가 있는지 검증
  test('toHaveProperty', () => {
    expect(author).toHaveProperty('name');
    expect(author).toHaveProperty('age');
  });

  // 객체 내 또 다른 객체 검증
  // 테스트 대상의 property가 기댓값 객체와 부분 일치하면 테스트 성공
  test('objectContaining', () => {
    expect(article).toEqual({
      title: 'Testing with Jest',
      author: expect.objectContaining({ name: 'taroyamada' }),
    });
    expect(article).toEqual({
      title: 'Testing with Jest',
      author: expect.not.objectContaining({ gender: 'man' }),
    });
  });
});
```

### 비동기 처리

비동기 처리가 포함된 함수를 테스트하는 여러 가지 방법을 살펴보자.

#### 1. Promise를 반환하는 작성법

(1) `Promise`를 반환하면서 `then`에 단언문을 작성하는 방법

`wait` 함수를 사용하면 `Promise` 인스턴스가 생성된다.  
`Promise`가 처리 중인 작업이 완료될 때까지 테스트 판정을 미룬다.

```typescript
test('지정 시간을 기다린 뒤 경과 시간과 함께 resolve 된다.', () => {
  return wait(50).then((duration) => {
    expect(duration).toBe(50);
  });
});
```

(2) `resolves` matcher를 사용하는 단언문을 return 하는 방법

`wait` 함수가 resolve 됐을 때의 값을 간편하게 검증

```typescript
test('지정 시간을 기다린 뒤 경과 시간과 함께 resolve 된다.', () => {
  return expect(wait(50)).resolves.toBe(50);
});
```

#### 2. async/await를 활용한 작성법

비동기 처리가 포함된 단언문이 여럿일 때 한 개의 테스트 함수 내에서 정리할 수 있는 장점이 있다.

(1) 테스트 함수를 `async` 함수로 만들고 함수 내에서 `Promise`가 완료될 때까지 기다리는 방법

```typescript
// 단언문도 await로 대기시킬 수 있음
test('지정 시간을 기다린 뒤 경과 시간과 함께 resolve 된다.', async () => {
  await expect(wait(50)).resolves.toBe(50);
});
```

(2) 검증값인 `Promise`가 완료되는 것을 기다린 뒤 단언문을 실행하는 방법 (가장 간략)

```typescript
test('지정 시간을 기다린 뒤 경과 시간과 함께 resolve 된다.', async () => {
  expect(await wait(50)).resolves.toBe(50);
});
```

#### 3. Reject 검증 테스트

(1) `Promise`를 반환하면서 `catch`에 단언문을 작성하는 방법

```typescript
test('지정 시간을 기다린 뒤 경과 시간과 함께 reject 된다.', () => {
  return timeout(50).catch((duration) => {
    expect(duration).toBe(50);
  });
});
```

(2) `rejects` matcher를 사용하는 단언문을 활용하는 방법

```typescript
// rejects matcher를 사용하는 단언문을 return
test('지정 시간을 기다린 뒤 경과 시간과 함께 reject 된다.', () => {
  return expect(timeout(50)).rejects.toBe(50);
});
```

```typescript
// async/await 사용
test('지정 시간을 기다린 뒤 경과 시간과 함께 reject 된다.', async () => {
  await expect(timeout(50)).rejects.toBe(50);
});
```

(3) `try-catch` 문을 사용하는 방법

```typescript
test('지정 시간을 기다린 뒤 경과 시간과 함께 reject 된다.', async () => {
  expect.assertions(1);
  try {
    await timeout(50);
  } catch (err) {
    expect(err).toBe(50);
  }
});
```

#### 4. 테스트 결과가 기댓값과 일치하는지 확인하기

```typescript
test('지정 시간을 기다린 뒤 경과 시간과 함께 reject된다', async () => {
  expect.assertions(1); // 단언문이 한 번 실행되는 것을 기대하는 테스트가 된다.
  try {
    await wait(50);
    // 오류가 발생하지 않아 단언문이 한 번도 실행되지 않은 채로 종료되므로 테스트는 실패한다.
  } catch (err) {
    expect(err).toBe(50);
  }
});
```

- 비동기 처리 테스트를 할 때는 `expect.assertions`를 추가하면 실수를 줄일 수 있다.
- 실행되어야 하는 단언문의 횟수를 인수로 받아 기대한 횟수만큼 단언문이 호출됐는지 검증한다.

#### 정리

- 비동기 처리를 테스트할 때 **테스트 함수가 동기 함수라면 반드시 단언문을 return해야 한다.**
- 비동기 처리가 포함된 부분을 테스트할 때 다음과 같은 원칙을 가지고 접근해야 한다.
  - 비동기 처리가 포함된 부분을 테스트할 때는 테스트 함수를 `async` 함수로 만든다.
  - `.resolves`나 `.rejects`가 포함된 단언문은 `await` 한다.
  - `try-catch` 문의 예외 발생을 검증할 때는 `expect.assertions`를 사용한다.
