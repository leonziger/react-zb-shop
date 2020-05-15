import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import { HeaderComponent} from './components/HeaderComponent/HeaderComponent';
import { AboutComponent} from './components/AboutComponent/AboutComponent';
import { CartComponent } from './components/CartComponent/CartComponent';
import { MainComponent} from './components/MainComponent/MainComponent';
import { FooterComponent} from './components/FooterComponent/FooterComponent';

export const App = () => {
  return (
    <Layout className="main">
      <HeaderComponent />
      <Router>
        <Route path="/" exact component={AboutComponent} />
        <Route path="/products" component={MainComponent} />
        <Route path="/cart" component={CartComponent} />
      </Router>
      <FooterComponent />
    </Layout>
  );
};
