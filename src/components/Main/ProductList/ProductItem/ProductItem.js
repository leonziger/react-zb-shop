import React, { useState } from 'react';
import { Card as CardComponent } from 'antd';
import ReactCardFlip from 'react-card-flip';

const { Meta } = CardComponent;

export const ProductItem = ({ item }) => {
  const [isFlipped, onUpdateFlipped] = useState(false);

  const onClick = () => {
    onUpdateFlipped(!isFlipped)
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <CardComponent
        key={item.id}
        hoverable
        style={{ width: '240px' }}
        cover={<img alt="example" src={item.image} style={{ width: '240px', height: '300px' }} />}
        onClick={onClick}
      >
        <Meta title={item.name} />
      </CardComponent>

      <CardComponent
        key={item.id}
        hoverable
        style={{ width: '240px' }}
        cover={<img alt="example" src={item.image} style={{ width: '240px', height: '300px' }} />}
        onClick={onClick}
      >
        <Meta title="back" />
      </CardComponent>
    </ReactCardFlip>
  );
};
