import styled from 'styled-components'

export const SearchWrapper = styled.div`
  margin: 0;
  padding: 10px 10px 0 10px;
  button{
    right: 10px;
    position: absolute;
  }
  a{
    color: #000;
  }
`

export const Recommend = styled.div`
  padding-top: 25px;
  box-sizing: border-box;
  p{
    font-weight: bold;
    padding-left: 3px;
  }
`

export const TagWrapper = styled.div`
  width: 112px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #eee;
  font-size: 12px;
  margin: 4px 6px 2px 0;
`
export const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
`
export const His = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-content: flex-start;
  box-sizing: border-box;
`
