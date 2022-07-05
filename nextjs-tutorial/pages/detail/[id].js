import Axios from 'axios';
import Head from 'next/head';
import Item from '../../src/component/Item';

export default function View({ item, name }) {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '740' } }, { params: { id: '730' } }, { params: { id: '729' } }],
    // 없는 페이지도 대응하기 위해 fallback 값을 true로 설정
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // context에는 params, req, res, query 등이 담겨서 온다.
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
