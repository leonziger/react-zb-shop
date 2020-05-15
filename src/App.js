import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import { Header} from './components/Header/Header';
import { About} from './components/About/About';
import { Cart } from './components/Cart/Cart';
import { Main} from './components/Main/Main';
import { Footer} from './components/Footer/Footer';

export const App = () => {
  return (
    <Router>
      <Layout className="main">
        <Header />

          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/react-zb-shop" exact component={About} />
            <Route path="/products" component={Main} />
            <Route path="/cart" component={Cart} />
          </Switch>

        <Footer />
      </Layout>
    </Router>
  );
};
