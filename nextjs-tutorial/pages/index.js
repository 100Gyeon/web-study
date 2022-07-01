import { useEffect, useState } from 'react';
import Axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';
import { Header } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | 100Gyeon</title>
        <meta name="description" content="nextjs tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  );
}
