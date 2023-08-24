import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 30px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const ScrapImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Nav = ({ scrapResultToggle, setScrapResultToggle, title }) => {
  const toggleImgSrc = scrapResultToggle ? '/images/scrap.png' : '/images/no_scrap.png';
  const toggleAltText = scrapResultToggle ? 'Scrap' : 'No Scrap';
  return (
    <Header>
      <ScrapImg
        src={toggleImgSrc}
        alt={toggleAltText}
        onClick={() => setScrapResultToggle(!scrapResultToggle)}
      />
      <Text>{title}</Text>
    </Header>
  );
};


export default Nav;
