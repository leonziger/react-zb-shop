import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import '../../App.css';
import './Header.css';

const { Header: AntdHeader } = Layout;

export const Header = () => {
  return (
    <AntdHeader className="header">
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