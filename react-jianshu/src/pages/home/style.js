import styled from 'styled-components'


export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow:hidden;
`


export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width:625px;
    height: 240px;
  }
`


export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
 float: left;
 background: #f7f7f7;
 height: 32px;
 line-height: 32px;
 font-size: 14px;
 color: #000;
 border: 1px solid #dcdcdc;
 border-radius: 4px;
 padding-right: 10px;
 margin-left: 18px;
 margin-bottom: 18px;
 .topic-pic{
   width: 32px;
   height: 32px;
   display: block;
   float: left;
   margin-right: 10px;
 }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow:hidden;
  .pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  border-radius: 4px;
  margin-bottom: 6px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278;
  border: .8px solid #eee;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`