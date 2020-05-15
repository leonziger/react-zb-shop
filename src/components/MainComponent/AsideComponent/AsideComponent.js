import React from 'react';
import { Layout } from 'antd';
import '../../../App.css';

const { Sider } = Layout;

export const AsideComponent = () => {
  return (
    <Sider style={{ minWidth: '200px', minHeight: '200px', padding: '10px', borderRight: '1px solid gray' }}>
      Фильтр товаров
    </Sider>
  );
};
