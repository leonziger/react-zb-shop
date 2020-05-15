import React from 'react';
import { Layout } from 'antd';
import '../../App.css';

const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer  style={{ backgroundColor: 'black', color: 'white', minHeight: '50px', display: 'flex'}}>
      <div className="container flex-center-center">
        Футер. Copyright 2020.
      </div>
    </Footer>
  )
};