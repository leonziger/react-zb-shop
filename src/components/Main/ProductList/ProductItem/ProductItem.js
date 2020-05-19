import React, { useContext } from 'react';
import { Card, Button } from 'antd';
import { ShopContext } from '../../../ShopProvider';

const { Meta } = Card;

export const ProductItem = ({ item }) => {
  const { cartTotal } = useContext(ShopContext);

  const addToCart = () => {
  };

  return (
    <Card
      key={item.id}
      hoverable
      style={{ width: '240px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      cover={<img alt="example" src={item.image} style={{ width: '240px', height: '300px' }} />}

    >
      <Meta
        title={item.name}
        description={item.price + ' ' + item.currency}
        style={{ textAlign: 'center', textTransform: 'capitalize', marginBottom: '10px' }}
      />
      <Button
        className="button-primary"
        type="primary"
        style={{ margin: '0 auto' }}
        onClick={addToCart}>
        Add to Cart
      </Button>
    </Card>
  );
};
