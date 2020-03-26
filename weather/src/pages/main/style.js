import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  padding-top: 10px;
  width: 100%;
  height: 30vh;
  /* border: 1px solid #000; */
`

export const MoreInfo = styled.div`
  padding: 40px 10px 130px 10px;
`
export const MoreWrapper = styled.div`
  padding-top: 20px;
  border-top: .5px solid hsla(0,0%,100%,.5);
  display: flex;
`
export const MoreDay = styled.div`
  flex: 1;
  padding: 5px 10px;
  border-right: .5px solid hsla(0,0%,100%,.5);
  text-align: center;
  
`
export const ExtraDay = styled.div`
  flex: 1;
  padding: 5px 10px;
  
`


