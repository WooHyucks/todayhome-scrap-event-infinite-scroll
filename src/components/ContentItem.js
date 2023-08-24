import React from 'react';
import styled from 'styled-components';

const ItemList = styled.div`
  position: relative;
`;

const Text = styled.h1`
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
`;

const Img = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 10px;
`;

const ClickScrapIcon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 10px;
  right: 25px;
  cursor: pointer;
`;

const ImgUrl = React.memo(({ item }) => <Img src={item.imageUrl} alt="/" />);

const ProductTitle = React.memo(({ item }) => <Text>{item.text}</Text>);

const ClickScrapToggle = React.memo(({ isScrapped, onScrapToggle }) => {
  console.log("코드확인");
  return (
    <ClickScrapIcon
      src={isScrapped ? "/images/scrap_on.png" : "/images/scrap_off.png"}
      alt="/"
      onClick={onScrapToggle}
    />
  );
});

const ContentItem = ({ item, isScrapped, onScrapToggle }) => {
  return (
    <ItemList>
      <ProductTitle item={item} />
      <ImgUrl item={item} />
      <ClickScrapToggle isScrapped={isScrapped} onScrapToggle={onScrapToggle} />
    </ItemList>
  );
};

export default ContentItem;
