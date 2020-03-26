import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.imgUrl});
  background-size: cover;
  color: white;
`

export const Header = styled.div`
  text-align: center;
  padding-top: 30px;
  font-size: 15px;
  font-weight: bold;
  span{
    margin-right: 5px;
  }
`

export const Temperature = styled.div`
  text-align: center;
  padding-top:30px;
  h2{
    font-size: 70px;
    margin: 0;
    padding:0;
    color: white;
  }
  span{
    padding-right: 15px;
  }
`

export const Extra = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
  text-align:center;
`

export const Echartcontaier = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 30vh;
  border: 1px solid #000;
`



