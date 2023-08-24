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

const ContentItem = ({ item, isScrapped, onScrapToggle}) => {
  const { text, imageUrl } = item;

  return (
    <ItemList>
      <Text>{text}</Text>
      <Img src={imageUrl} alt="/" />
      <ClickScrapIcon
        src={isScrapped ? "/images/scrap_on.png" : "/images/scrap_off.png"}
        alt="/"
        onClick={onScrapToggle}
      />
    </ItemList>
  );
};

export default ContentItem;