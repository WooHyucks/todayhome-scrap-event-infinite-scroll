import styled from 'styled-components'


const Content = ({data,ScrapHandle,onClick}) => {
  return (
    <Container>
      {data.map((item,index) => (
        <ItemList key={index}>
          <Text>{item.text}</Text>
          <Img src={item.imageUrl} alt="/" />
          {ScrapHandle[index] ?   
          (<ScrapOn
          src="/images/scrap_on.png" 
          alt="/"
          onClick={()=>onClick(index)} />) 
          : 
          (<ScrapOff
          src="/images/scrap_off.png" 
          alt="/"
          onClick={()=>onClick(index)} />)}
        </ItemList>))
      }
    </Container>
  )
}

export default Content

const Container = styled.div`
  margin-top:20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px
`

const ItemList = styled.div`
  position: relative;
`

const Text = styled.h1`
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
`
const Img = styled.img`
  width:200px;
  height:150px;
  border-radius: 10px;
`
const ScrapOff = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 10px;
  right: 25px;
`

const ScrapOn = styled(ScrapOff)`
  
`


