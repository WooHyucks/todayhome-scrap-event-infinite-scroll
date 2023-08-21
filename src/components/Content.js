import React from 'react';
import styled from 'styled-components';
import ContentItem from './ContentItem'; 

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

const Content = ({ data, productsScrapToggle, scrapToggleClick }) => {
  return (
    <Container>
      {data.map((item, index) => (
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
