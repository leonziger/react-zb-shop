import React from 'react';
import { Layout, Row, Col } from 'antd';
import { ProductItem } from './ProductItem/ProductItem';

const data = [
  {
    id: 1,
    name: "шарик",
    image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
  },
  {
    id: 2,
    name: "футболка",
    image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
  },
  {
    id: 4,
    name: "шарик 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
  }
]


export const ProductList = () => {
  const renderCart = (item) => (
    <Col span={3} key={item.id}>
      <ProductItem item={item}/>
    </Col>
  )

  return (
    <Layout style={{ width: '100%', padding: '10px' }}>
      <Row style={{ display: 'flex', justifyContent: 'space-around'}}>
        {
          data.map(el => renderCart(el))
        }
      </Row>
    </Layout>
  )
}