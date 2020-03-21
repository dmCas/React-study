import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 720px;
  margin: 0 auto;
  padding-bottom: 100px;
  /* background: red; */
`

export const Header = styled.div`
  margin: 40px 0 20px 0;
  font-size: 24px;
  line-height: 44px;
  color: #333;
  font-weight: bold;
`

export const Content = styled.div`
  color: #404040;
  img{
    max-height: 1245px;
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
  p{
    margin: 25px 0;
    color: #2f2f2f;
    font-size: 16px;
    line-height: 30px;
  }
`