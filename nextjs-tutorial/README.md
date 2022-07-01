## nextjs-tutorial

### 1. Intro, Page Layout

- `yarn create next-app`으로 설치하면

  1. 컴파일과 번들링이 자동으로 된다.
  2. 코드를 수정하면 화면에 바로 반영된다. (자동 refresh 기능)
  3. server-side rendering이 지원된다.
  4. static file을 지원한다. static file은 public 폴더에 둬야 한다.

- `_app.js`

  - 페이지 전환 시 레이아웃을 유지할 수 있다.
  - 페이지 전환 시 상태 값을 유지할 수 있다.
  - componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
  - 추가적인 데이터를 페이지로 주입시키는 게 가능하다.
  - 글로벌 css를 이곳에 선언한다.
  - props로 넘어온 Component는 현재 page를 의미한다. page 전환 시 Component props가 변경된다.
  - pageProps는 data fetching method를 통해 미리 가져온 초기 객체이다. 이 method를 사용하지 않으면 빈 객체가 전달된다.

- `_document.js`
  - 서버에서만 렌더링되고, onClick 같은 event handler는 작동하지 않는다.
  - 여기서는 css도 사용하지 않는다.
  - `_document.js`에서 사용하는 `Head`와 `_app.js`에서 사용하는 `Head`는 다르다.
