import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width:960px;
  margin:0 auto ;
  height:100%;
  padding-right: 70px;
  box-sizing:border-box;
`
export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  a {
    text-decoration: none;
    color: #333;
    &.active{
      color:#ea6f5a;
    }
  }
  &.left{
    float: left
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 19px;
  background: #eeeeee;
  margin-top: 9px;
  font-size: 14px;
  padding: 0 20px;
  box-sizing:border-box;
  outline: none;
  padding: 0 35px 0 20px;
  &::placeholder {
    color: #999;
  }
  &.focused{
    width: 240px;
  }
`
export const SearchWrapper = styled.div `
  position: relative;
  float: left;
  .slide-enter{
    width:160px;
    transition: all 0.3s ease-out
  }
  .slide-enter-active{
    width: 240px;
  }
  .slide-exit{
    transition: all 0.3s ease-out
  }
  .slide-exit-active{
    width: 160px;
  }
  .iconfont{
    position: absolute;
    right:5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    background-color: none;
    text-align: center;
    &.focused{
      background-color: #777;
      color: #fff;
    }
  }
`

export const Addition = styled.div`
  position:absolute;
  right: 0;
  top: 0;
  height: 56px;
  margin-right: 60px;
`

export const Button = styled.div`
  float:right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid rgba(236,97,73,.7);
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`