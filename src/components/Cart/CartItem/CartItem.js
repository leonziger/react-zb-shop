import React from 'react';
import '../../../App.css';

export const CartItem = ({ item, action }) => {
  const { name, id, price, qty } = item;

  return(
    <div className="tbLine" key={id}>
      <span className="tbItem">{name} :</span>
      <button className="button-primary minus" onClick={() => action('minus', id)}> - </button>
      <span className="tbValue value">{qty}</span>
      <button className="button-primary plus" onClick={() => action('plus', id)}> + </button>
      <span className="tbItem rice">{price} грн.</span>
      <span className="tbItem valueTotal"> {qty * price} грн.</span>
      <button className="button-primary delete" onClick={() => action('delete', id)}> delete </button>
    </div>
  )
};
