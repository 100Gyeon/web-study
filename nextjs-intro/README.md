# NextJS Introduction

## 0. automatic setup
```bash
npx create-next-app@latest
# or
yarn create next-app
```
↪️ typescript로 시작하려면, 맨 뒤에 `--typescript` 추가
```
yarn dev
```

## 1. pages
📁pages 안에 있는 파일명이 그대로 url에 쓰인다.  
- 📁pages/about.js ➡️ `http://localhost:3000/about`  

### 1-1. pages with indexed routes
- 📁page/index.js ➡️ `http://localhost:3000`
- 📁pages/📁movies/index.js ➡️ `http://localhost:3000/movies`  

### 1-2. pages with nested routes
- 📁pages/📁movies/all.js ➡️ `http://localhost:3000/movies/all`  

### 1-3. pages with dynamic routes
- 📁pages/📁movies/[id].js ➡️ `http://localhost:3000/movies/123`  

### 1-4. pages with catch all routes
... 이용해서 모든 path를 잡아낼 수 있다.
- 📁pages/📁movies/[...params].js ➡️ `http://localhost:3000/movies/a`, `http://localhost:3000/movies/a/b`, `http://localhost:3000/movies/a/b/c` 등 movies로 시작하는 모든 path에 접근할 수 있다. 하지만 params가 없는 경우인 `http://localhost:3000/movies`는 매칭되지 않는다.     
- 📁pages/📁movies/[[...params]].js ➡️ 위에서 언급한 path 모두 가능하다.

## 2. routing
<table>
<tr>
<td> 잘못된 방법 </td> <td> 옳은 방법 </td>
</tr>
<tr>
<td>

```javascript
export default function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
}
```

</td>
<td>
    
```javascript
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
```
</td>
</tr>
</table>

- Link는 단지 href만을 위한 것
- 나머지(style, className)는 모두 anchor 태그에 넣는다.

### useRouter Hook
- [공식 문서](https://nextjs.org/docs/api-reference/next/router)
- pathname으로 현재 url을 알 수 있음
```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>About</a>
      </Link>
    </nav>
  );
}
```

## 3. pre-rendering

- pre-rendering이란 미리 HTML을 구성하는 것
- Next.js의 장점 중 하나
- SEO에 더 좋다.
- `Static-site Generation (SSG)` : HTML을 **빌드 타임에 생성**해 두고 요청 시마다 **재사용**하는 방법  
  <img src="https://user-images.githubusercontent.com/58380158/175053365-a6834389-3fe2-4366-9e0f-a76761480d50.png" width="400px" />
  ```javascript
  export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
  ```
- `Server-side Rendering (SSR)` : HTML을 **요청 시마다 생성**해 주는 방법  
  <img src="https://user-images.githubusercontent.com/58380158/175053424-3e0c19f4-eeec-4103-a657-c094f97d6fbd.png" width="400px" />
  ```javascript
  export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
  ```

## 4. custom app (_app.js)
- 모든 페이지에서 공통적으로 사용하는 것들(NavBar, 글로벌 스타일 등)을 _app.js에서 한 번에 적용할 수 있음
- NextJS가 _app.js를 불러와서 실행
- `<style jsx global>`로 글로벌 스타일 적용 가능
```javascript
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          text-decoration: none;
          color: black;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </div>
  );
}
```

## 5. Layout component
- _app.js 파일 크기가 커지는 것은 지양해야 함
- 이를 위해 Layout 컴포넌트를 _app.js에서 import함
```javascript
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
```
```javascript
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          text-decoration: none;
          color: black;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </Layout>
  );
}
```

## 6. Old vs New Version
Next.js v14부터 data fetching, routing 방식 변경  
app router, pages router를 함께 사용할 수 있으니, 버전 먼저 업그레이드한 뒤 app router로 마이그레이션  
Next.js는 app 폴더 안의 page.tsx를 참조
