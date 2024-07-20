import Axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';
import { Header, Divider } from 'semantic-ui-react';

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home | 100Gyeon</title>
        <meta name="description" content="메인 페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl && apiUrl.toString());
  const data = res.data;

  return {
    props: {
      list: data,
    },
  };
}
