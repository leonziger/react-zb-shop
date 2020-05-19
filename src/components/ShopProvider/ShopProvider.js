import React, { useState } from 'react';

const emptyproduct = [
  {
    id: 1,
    name: 'Шарик',
    price: 20,
    qty: 1
  },
  {
    id: 2,
    name: 'Футболка',
    price: 50,
    qty: 4
  },
  {
    id: 4,
    name: 'Сердце',
    price: 30,
    qty: 2
  },
];

export const ShopContext = React.createContext({});

export const ShopProvider = ({ children }) => {
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ products, setProducts ] = useState(emptyproduct);

  const globalParams = {
    //vars
    cartTotal,
    products,

    // functions
    setCartTotal,
    setProducts
  };

  return (
    <ShopContext.Provider value={globalParams}>
      {children}
    </ShopContext.Provider>
  );
};
