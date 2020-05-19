import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import { ShopProvider } from './components/ShopProvider';
import { Header} from './components/Header/Header';
import { Home} from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import { Main} from './components/Main/Main';
import { Footer} from './components/Footer/Footer';

export const App = () => {
  return (
    <ShopProvider>
      <Router>
        <Layout className="main">
          <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={Main} />
              <Route path="/cart" component={Cart} />
              <Redirect to="/" />
            </Switch>
          <Footer />
        </Layout>
      </Router>
    </ShopProvider>
  );
};
