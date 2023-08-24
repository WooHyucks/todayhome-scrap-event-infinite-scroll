import React, { useState } from 'react';
import styled from 'styled-components';
import ContentItem from './ContentItem';
import data from './Data';

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

const Content = ({ scrapResultToggle }) => {
  const [productsScrapToggle, setProductsScrapToggle] = useState(Array(data.length).fill(false));

  const scrapToggleClick = (i) => {
    const newScrap = productsScrapToggle.slice();
    newScrap[i] = !newScrap[i];
    setProductsScrapToggle(newScrap);
  };

  const filteredData = scrapResultToggle ? data.filter((value, index) => productsScrapToggle[index]) : data;


  return (
    <Container>
      {filteredData.map((item, index) => (
        <ContentItem
          key={index}
          item={item}
          isScrapped={productsScrapToggle[index]}
          onScrapToggle={() => scrapToggleClick(index)}
        />
      ))}
    </Container>
  );
};

export default Content;