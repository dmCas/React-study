import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.imgUrl});
  background-size: cover;
 
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
export const Forecast = styled.div`
  padding-top: 50px;
  display: flex;
`
export const Current = styled.div`
  flex: 1;
  /* display: flex; */
  border: 1px solid #000;
  text-align: left;
  height: 60px;
  padding: 5px 5px;
  overflow: hidden;
  .left{
    float:left;
  }
  .right{
    float: right;
  }
  p{
    margin: 0;
    padding: 0;
    bottom: 0;
  }
`
export const Next = styled.div`
  flex: 1;
`



