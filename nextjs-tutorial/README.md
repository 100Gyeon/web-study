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

### 3. Pre-rendering

- Next.js는 기본적으로 모든 페이지를 사전 렌더링(pre-rendering) 한다.
- 사전 렌더링은 더 좋은 퍼포먼스를 내고, 검색 엔진 최적화(SEO)에 좋다.
- Pre-rendering에는 2가지 방법이 있다. : Static-site Generation(SSG), Server-side rendering(SSR)
- 2가지 방법의 차이점? 언제 HTML 파일을 생성하는가

#### 3-1. 정적 생성

- 프로젝트 빌드하는 시점에 HTML 파일 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로 Next.js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시됨
- getStaticProps / getStaticPaths
- 유저가 요청하기 전에 미리 페이지를 만들어놔도 상관없으면 정적 생성을 쓰면 된다.
- 마케팅 페이지, 블로그 게시물, 제품 리스트, 도움말, 문서에 적합

#### 3-2. 서버사이드 렌더링

- 매 요청마다 HTML 파일 생성
- CDN에 캐시되지 않기 때문에 조금 느릴 수 있음
- 항상 최신 상태 유지
- getServerSideProps
- 관리자 페이지, 분석 차트에 적합
