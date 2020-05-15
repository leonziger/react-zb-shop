import React from 'react';
import { Layout, Typography } from 'antd';
import '../../App.css';

const { Header } = Layout;
const { Paragraph } = Typography;

export const HeaderComponent = () => {
  return (
    <Header style={{ backgroundColor: 'gray', color: 'white', minHeight: '50px', display: 'flex'}}>
      <div className="container flex-center-center">
        <Paragraph style={{ display: 'flex', justifyContent: 'space-between'}}>
              <a href="/" className="headerLink">Главная</a>
              <a href="/products" className="headerLink">Товары</a>
              <a href="/cart" className="headerLink">Корзина</a>
        </Paragraph>
      </div>
    </Header>
  )
};