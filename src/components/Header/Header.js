import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../../App.css';

const { Header: AntdHeader } = Layout;

export const Header = () => {
  return (
    <AntdHeader style={{ backgroundColor: 'gray', color: 'white', minHeight: '50px', display: 'flex'}}>
      <div className="container flex-center-center">
        <nav style={{ display: 'flex', justifyContent: 'space-between'}}>
          <NavLink exact to="/" className="headerLink">Главная</NavLink>
          <NavLink to="/products" className="headerLink">Товары</NavLink>
          <NavLink to="/cart" className="headerLink">Корзина</NavLink>
        </nav>
      </div>
    </AntdHeader>
  )
};