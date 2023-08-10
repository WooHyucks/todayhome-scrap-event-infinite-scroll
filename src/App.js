import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import Content from './components/Content';
import data from './components/Data';

function App() {
  const [scrapHandle, setScrapHandle] = useState(Array(data.length).fill(false));
  const [scrap, setScrap] = useState(false);
  const [page, setPage] = useState(1);

  const handleClick = (i) => {
    const newScrap = scrapHandle.slice();
    newScrap[i] = !newScrap[i];
    setScrapHandle(newScrap);
  };

  const scrapData = data.filter((value, index) => scrapHandle[index]);

  useEffect(() => {
    const loadMoreData = () => {
      console.log("ddddddddddd")
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
      <Nav scrap={scrap} setScrap={setScrap} />
      <Content data={scrap ? scrapData : data} ScrapHandle={scrapHandle} onClick={handleClick} />
    </Container>
  );
}

export default App;

const Container = styled.main`
  margin: auto;
  max-width: 900px;
`;
