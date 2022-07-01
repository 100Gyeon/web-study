import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';

export default function View() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    Axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) getData();
  }, [id]);

  return (
    <div>
      <Item item={item} />
    </div>
  );
}
