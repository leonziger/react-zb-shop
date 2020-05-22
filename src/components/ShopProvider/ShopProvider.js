import React, { useState } from 'react';

const data = [
  {
    id: 123,
    name: 'Шарик',
    price: 20,
    qty: 1
  },
  {
    id: 234,
    name: 'Футболка',
    price: 50,
    qty: 1
  },
  {
    id: 345,
    name: 'Сердце',
    price: 30,
    qty: 1
  },
];

export const ShopContext = React.createContext({});

export const ShopProvider = ({ children }) => {
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ cart, setCart ] = useState([...data]);

  const globalParams = {
    //vars
    cartTotal,
    cart,

    // functions
    setCartTotal,
    setCart
  };

  return (
    <ShopContext.Provider value={globalParams}>
      {children}
    </ShopContext.Provider>
  );
};
