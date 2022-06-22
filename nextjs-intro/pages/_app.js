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
