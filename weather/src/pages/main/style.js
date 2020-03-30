import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${props => props.imgUrl});
  background-size: cover;
  color: white;
  a{
    color: #fff;
  }
`
export const Loading = styled.div`
  width: 100%;
  height:100%;
  background-color: #fff;
  position: fixed;
  top:0;
  left:0;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align:center;
`

export const SpanWrapper = styled.div`

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
    padding-right: 10px;
    letter-spacing: 1px;
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
  padding: 40px 10px 10px 10px;
  img{
    vertical-align: baseline;
  }
`
export const MoreWrapper = styled.div`
  padding-top: 10px;
  border-top: .5px solid hsla(0,0%,100%,.5);
  display: flex;
  & :nth-last-of-type(1){
    border: none;
  }
`
export const MoreDay = styled.div`
  flex: 1;
  padding: 5px 10px;
  border-right: .5px solid hsla(0,0%,100%,.5);
  text-align: center;
  p{
    margin:0;
    padding:0;
  }
  .temp{
    padding: 10px 0 10px 8px;
    display:inline-block;
  }
  
`
export const ExtraDay = styled.div`
  flex: 1;
  padding: 5px 10px;
  
`


