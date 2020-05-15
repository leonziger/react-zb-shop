import React from 'react';
import { Layout } from 'antd';
import '../../App.css';

const { Footer: AntdFooter } = Layout;

export const Footer = () => {
  return (
    <AntdFooter  style={{ backgroundColor: 'black', color: 'white', minHeight: '50px', display: 'flex'}}>
      <div className="container flex-center-center">
        Магазин каких-то товаров. Copyright 2020.
      </div>
    </AntdFooter>
  )
};