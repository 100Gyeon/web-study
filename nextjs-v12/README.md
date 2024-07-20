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

### 2. Dynamic Routes, next/link

- [관련 커밋](https://github.com/100Gyeon/web-study/commit/77ead4b2c5127d271167bb922be275ed1e50c8f6)
- Next.js의 Dynamic Routes를 이용해 상품 ID가 달라도 하나의 페이지로 관리할 수 있다.
- next/link를 이용해 새로고침 없이 페이지 간 이동을 할 수 있다.
- Link에는 `prefetch`라는 속성이 있다. default가 true. 이걸 쓰게 되면 첫 화면이나 스크롤을 했을 때, viewport 내부에 있는 링크들은 다 preload 된다. preload가 된다는 것은 정적 생성이 된다는 것.

### 3. Pre-rendering

- Next.js는 기본적으로 모든 페이지를 사전 렌더링(pre-rendering) 한다.
- 사전 렌더링은 더 좋은 퍼포먼스를 내고, 검색 엔진 최적화(SEO)에 좋다.
- Pre-rendering에는 2가지 방법이 있다. : `Static-site Generation(SSG)`, `Server-side rendering(SSR)`
- 2가지 방법의 차이점? **언제** HTML 파일을 생성하는가

#### 3-1. 정적 생성

- 프로젝트 빌드하는 시점에 HTML 파일 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로 Next.js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시됨
- `getStaticProps` / `getStaticPaths`
  - 개발 환경에서는 둘 다 요청할 때마다 호출된다. 그래서 개발 환경에서 테스트하기 더 편하다.
  - `getStaticProps` : [id] 같은 Dynamic Routes는 불가능. 어떤 id가 들어올지 모르기 때문에 모든 제품에 대해 html을 하나하나 생성해둘 수 없음.
  - `getStaticPaths` : 만약 개수가 한정적이고 id list를 미리 알 수 있으면, [id] 같은 Dynamic Routes도 가능.
    - return 할 때 fallback 값이 false이면, 없는 페이지 대응을 못한다. 없는 페이지는 그냥 404 페이지 뜬다.
    - return 할 때 fallback 값이 true라면?  
      `getStaticPaths`로 전달된 경로들이 build time에 만들어지는 것은 변함없음.  
      나머지는 최초 접속 시 props가 빈 상태(원하면 로딩 표시 가능)로 그려지고,  
      이후에 background에서 정적 파일로 html과 json을 생성해 준다.  
      그다음에 Next.js는 pre-rendering 목록에 추가한다.  
      두 번째 접속부터는 정적 생성된 페이지를 사용하기 때문에 새로고침 해도 굉장히 빠르게 보인다.  
      (주의) 페이지가 굉장히 많을 경우 위험함. build time 늘어남.
- 유저가 요청하기 전에 미리 페이지를 만들어놔도 상관없으면 정적 생성을 쓰면 된다.
- 마케팅 페이지, 블로그 게시물, 제품 리스트, 도움말, 문서에 적합

#### 3-2. 서버사이드 렌더링

- 매 요청마다 HTML 파일 생성
- CDN에 캐시되지 않기 때문에 조금 느릴 수 있음
- 항상 최신 상태 유지
- `getServerSideProps`
- 관리자 페이지, 분석 차트에 적합

### 4. Custom Error Page

- [공식 문서](https://nextjs.org/docs/advanced-features/custom-error-page)
- 404 에러
  - Next.js는 404 페이지를 static file로 제공한다.
  - pages 폴더 안에 `404.js` 파일을 만들면 된다. 이 파일은 build time에 정적 생성된다.
- 500 에러
  - production mode에서 확인해야 함. 개발 모드에서는 서버 에러가 나면 로그를 보여주기 때문.
  - production으로 띄우려면 `yarn build && yarn start` 해야 한다.
  - `500.js` 파일을 만드는 것이 아니라, `_error.js` 파일을 만들어서 처리한다.
  - 이 페이지는 정적으로 최적화되어 있지는 않다. 에러가 발생했을 때 서버 쪽으로 에러를 보내는 작업을 동반하는 경우가 많기 때문.

### 5. Environment Variables

- 환경에 따라 변할 수 있는 값들을 분기 처리할 수 있다.
- (예) 개발 환경과 production 환경에서 다른 리스트가 보여야 할 때, test data가 실제 서비스 리스트에 나오면 안 될 때
- `.env.development`
- `.env.production`
- node.js 환경(getServerSideProps 내부)과 browser 환경에서 사용법이 다르다.
  - node.js : process.env.변수명
  - browser : process.env.NEXT_PUBLIC_변수명

### 6. API Routes, 로그인 구현
- `http://localhost:3000/api/hello`에 접속하면, pages/api/hello.js에 작성한 json이 보인다.
- 페이지 만드는 것과 동일하게 api도 만들 수 있다.
- 작업 흐름은 다음과 같다.
  ![flow](https://user-images.githubusercontent.com/58380158/177291500-4894f0ca-2899-4bd7-ad39-845669628fa0.png)
