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
