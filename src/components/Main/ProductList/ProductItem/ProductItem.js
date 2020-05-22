import React, { useContext } from 'react';
import { Card, Button } from 'antd';
import { ShopContext } from '../../../ShopProvider';

const { Meta } = Card;

export const ProductItem = ({ item }) => {
  const { cart, setCart } = useContext(ShopContext);

  const addToCart = () => {
    let selectedProduct = {
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1
    };

    let currentProductId = cart.find(product => product.id === item.id).id;
    if (currentProductId) {
      cart.map((product) => {
        if (product.id === currentProductId) {
          product.qty++;
        }
        return product;
      });
    } else {
      cart.push(selectedProduct);
    }

    setCart(cart);
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
        description={item.price + ' ' + 'грн.'}
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
