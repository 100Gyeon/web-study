- 타입스크립트 컴파일러 설치

  ```
  npm install -g typescript
  ```

- 타입스크립트 컴파일러 실행

  ```
  tsc 파일명.ts
  tsc 파일명.ts --target es6 // target 옵션으로 최신 브라우저만 지원
  tsc 파일명.ts --lib es2015,dom // library 옵션
  tsc 파일명.ts --target es6 --lib es2015,dom --module common.js // module 옵션 (Node.js 프로젝트라면 common.js를 선택)
  ```

- 타입스크립트 컴파일러 설정파일 적용 후

  ```
  tsc
  node dist/파일명.js
  ```

- 모든 타입의 상위 타입은 any다.

  ```typescript
  let anyValue: any;

  anyValue = 1;
  anyValue = "3";
  anyValue = null;
  anyValue = {};
  ```

- 모든 타입의 하위 타입은 null과 undefined다.

  ```typescript
  let numValue: number;

  numValue = null;
  numValue = undefined;
  ```
