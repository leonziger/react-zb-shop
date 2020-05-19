import React from 'react';
import { Layout } from 'antd';
import '../../App.css';
import { Aside } from './Aside/Aside';
import { ProductList } from './ProductList/ProductList';

export const Main = () => {
  return (
    <Layout className="contentWrapper">
      <Aside />
      <ProductList/>
    </Layout>
  );
};