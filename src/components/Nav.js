import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display:flex;
  align-items: center;
  gap:5px;
  margin-top:30px;
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

const ScrapResultTitle = React.memo(({ title }) => <Text>{title}</Text>);

const ScrapResultToggle = React.memo(({ scrapResultToggle, setScrapResultToggle }) => {
  const toggleImgSrc = scrapResultToggle ? '/images/scrap.png' : '/images/no_scrap.png';
  const toggleAltText = scrapResultToggle ? 'Scrap' : 'No Scrap';
  
  return (
    <ScrapImg
      src={toggleImgSrc}
      alt={toggleAltText}
      onClick={() => setScrapResultToggle(!scrapResultToggle)}
    />
  );
});

const Nav = ({ scrapResultToggle, setScrapResultToggle, title }) => {
  return (
    <Header>
      <ScrapResultToggle scrapResultToggle={scrapResultToggle} setScrapResultToggle={setScrapResultToggle} />
      <ScrapResultTitle title={title} />
    </Header>
  );
};

export default Nav;