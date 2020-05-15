import React from 'react';
import { Layout } from 'antd';
import '../../App.css';
import { Aside } from './Aside/Aside';
import { ProductList } from './ProductList/ProductList';

export const Main = () => {
  return (
    <Layout style={{ display: 'flex', borderLeft: '1px solid gray', borderRight: '1px solid gray'}}>
      <Aside />
      <ProductList/>
    </Layout>
  );
};