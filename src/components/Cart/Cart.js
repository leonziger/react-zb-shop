import React,{ useContext, useEffect } from 'react';
import { Layout} from 'antd';
import '../../App.css';
import './Cart.css';
import { ShopContext } from '../ShopProvider';

export const Cart = () => {
  const { products, setProducts, cartTotal, setCartTotal } = useContext(ShopContext);

  const getCartTotal = (products) => {
    let total = products.reduce((accum, product) => {
      return accum + parseInt(product.qty, 10) * parseInt(product.price, 10);
    }, 0);

    setCartTotal(total);
  };

  const calculateCart = (event) => {
    event.preventDefault();

    if (event.target.classList.contains('minus')) {

      const div = event.target.closest('div');
      const productId = div.getAttribute('data');
      let value = div.querySelector('.value').textContent;
      let productPrice = div.querySelector('.productPrice').textContent;
      let valueTotal = div.querySelector('.valueTotal').textContent;

      value--;
      if (value <= 0) {
        value = 0;
      }
      valueTotal = parseInt(value,10) * parseInt(productPrice,10);

      if (div.querySelector('.value')) {
        div.querySelector('.value').textContent = value;
      }
      if (div.querySelector('.valueTotal')) {
        div.querySelector('.valueTotal').textContent = valueTotal + " грн.";
      }

      products[productId].qty = value;
      setProducts(products);
      getCartTotal(products);
    }

    if (event.target.classList.contains('plus')) {

      const div = event.target.closest('div');
      const productId = div.getAttribute('data');
      let value = div.querySelector('.value').textContent;
      let productPrice = div.querySelector('.productPrice').textContent;
      let valueTotal = div.querySelector('.valueTotal').textContent;

      value++;
      if (value === 999) {
        value = 999;
      }
      valueTotal = parseInt(value,10) * parseInt(productPrice,10);

      if (div.querySelector('.value')) {
        div.querySelector('.value').textContent = value;
      }
      if (div.querySelector('.valueTotal')) {
        div.querySelector('.valueTotal').textContent = valueTotal + " грн.";
      }

      products[productId].qty = value;
      setProducts(products);
      getCartTotal(products);
    }

    if (event.target.classList.contains('delete')) {
      const div = event.target.closest('div');
      const productId = div.getAttribute('data');

      div.parentNode.removeChild(div);

      products.splice(productId, 1);
      setProducts(products);
      getCartTotal(products);
    }
  };

  useEffect(() => {
    getCartTotal(products);
  });

  return(
    <Layout className="contentWrapper">
      <div className="tbProducts" onClick={calculateCart}>
        {products.length > 0 ?
          <div key={products.length}>
            <div className="tbTitle">Корзина</div>
              {
                products.map((product, i) => {
                  return(
                    <div className="tbLine" data={i} key={product.id}>
                      <span className="tbItem">{product.name} :</span>
                      <button className="button-primary minus"> - </button>
                      <span className="tbValue value">{product.qty}</span>
                      <button className="button-primary plus"> + </button>
                      <span className="tbItem productPrice">{product.price} грн.</span>
                      <span className="tbItem valueTotal"> {product.qty * product.price} грн.</span>
                      <button className="button-primary delete"> delete </button>
                    </div>
                  )
                })
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
