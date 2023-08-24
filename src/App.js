import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import Content from './components/Content';


const Container = styled.main`
  width: 100%;
  margin: auto;
  max-width: 900px;
`;


function App() {
  const [scrapResultToggle, setScrapResultToggle] = useState(false);
  const [page, setPage] = useState(1);

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
    <Nav 
    scrapResultToggle={scrapResultToggle} 
    setScrapResultToggle={setScrapResultToggle} 
    title="스크랩한 결과 보기" />
    <Content scrapResultToggle={scrapResultToggle} />
  </Container>
);
}

export default App;