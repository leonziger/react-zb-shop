import React from 'react';
import { Layout } from 'antd';
import '../../App.css';
import { AsideComponent } from './AsideComponent/AsideComponent';
import { ContentComponent } from './ContentComponent/ContentComponent';

export const MainComponent = () => {
  return (
    <Layout style={{ display: 'flex', borderLeft: '1px solid gray', borderRight: '1px solid gray'}}>
      <AsideComponent />
      <ContentComponent/>
    </Layout>
  );
};