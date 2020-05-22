import React,{ useContext, useEffect } from 'react';
import { Layout} from 'antd';
import '../../App.css';
import { ShopContext } from '../ShopProvider';
import { CartItem} from './CartItem';
import './Cart.css';

export const Cart = () => {
  const { cart, setCart, cartTotal, setCartTotal } = useContext(ShopContext);

  const getCartTotal = (cart) => {
    let total = cart.reduce((accum, product) => {
      return accum + product.qty * product.price;
    }, 0);

    setCartTotal(total);
  };

  const handleClick = (action, index) => {

    switch (action) {
      case 'minus':
        setCart( cart.map((product) => {
          product.id === index && product.qty >= 1 && product.qty--;
          return product;
        }) );
        break;
      case 'plus':
        setCart( cart.map((product) => {
          product.id === index && product.qty <= 999 && product.qty++;
          return product;
        }) );
        break;
      case 'delete':
        setCart(cart.filter((item) => item.id !== index));
        break;
      default:
        console.log('Другие операции не предусмотрены');
    }

  };

  useEffect(() => {
    getCartTotal(cart);
  });

  return(
    <Layout className="contentWrapper">
      <div className="tbProducts">
        {cart.length > 0 ?
          <div key={cart.length}>
            <div className="tbTitle">Корзина</div>
              {
                cart.map(product =>
                  <CartItem key={product.id} item={product} action={handleClick}/>
                )
              }
            <div className="tbTotal">
              <div className="tbTotalName">ИТОГО:</div>
              <div className="tbTotalAmount">{cartTotal} грн.</div>
            </div>
          </div>
          :
            "Корзина пуста"
        }
      </div>
    </Layout>
  );
};
