import { Button, Header } from 'semantic-ui-react';
import styles from './Item.module.css';

export default function Item({ item }) {
  const { name, image_link, price, description, category, product_type } = item;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.title_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.text_info}>
            {category ? `${category}/` : ''}
            {product_type}
          </span>
          <Button color="pink">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}
