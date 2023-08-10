
import styled from 'styled-components'

const Nav = ({scrap,setScrap}) => {

  return(
  <Header>
    {scrap ? 
    (<ScrapImg 
    src='/images/scrap.png'
    alt='Scrap' 
    onClick={()=>setScrap(false)}/>)
    :
    (<ScrapImg 
    src='/images/no_scrap.png'
    alt='Scrap' 
    onClick={()=>setScrap(true)}/>)}
    <Text>스크랩한 결과만 보기</Text>
  </Header>
  )
  }


export default Nav

const Header = styled.div`
  display:flex;
  align-items: center;
  gap:5px;
  margin-top:30px;
`
const Text = styled.span`
  font-size : 14px;
  font-weight: 600;
`
const ScrapImg = styled.img`
  width:20px;
  height:20px;
  cursor:pointer;
`
