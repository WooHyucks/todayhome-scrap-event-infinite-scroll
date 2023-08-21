import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import Content from './components/Content';
import data from './components/Data';


const Container = styled.main`
  width: 100%;
  margin: auto;
  max-width: 900px;
`;


function App() {
  const [productsScrapToggle, setProductsScrapHandle] = useState(Array(data.length).fill(false));
  const [scrapResultToggle, setScrapResultToggle] = useState(false);
  const [page, setPage] = useState(1);

  const scrapToggleClick = (i) => {
    const newScrap = productsScrapToggle.slice();
    newScrap[i] = !newScrap[i];
    setProductsScrapHandle(newScrap);
  };

  const scrapTrueData = data.filter((value, index) => productsScrapToggle[index]);

  useEffect(() => {
    const loadMoreData = () => {
      setPage(page + 1);
    };
  
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreData();
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (
  <Container>
    <Nav scrapResultToggle={scrapResultToggle} setScrapResultToggle={setScrapResultToggle} title="스크랩한 결과 보기" />
    <Content 
      data={scrapResultToggle ? scrapTrueData : data} 
      productsScrapToggle={productsScrapToggle} 
      scrapToggleClick={scrapToggleClick}
    />
  </Container>
);
}

export default App;
