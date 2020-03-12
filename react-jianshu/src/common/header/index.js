import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import { HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        NavSearch,
        Addition,
        Button,
        SearchWrapper
      }from './style'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  handleInputFocus(){
    this.setState({
      focused: true
    })
  }
  handleInputBlur(){
    this.setState({
      focused: false
    })
  }
  render () {
    return (
      <HeaderWrapper >
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe698;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200} 
              in={this.state.focused}
              classNames="slide"
            >
              {/* slider-enter slider-enter-active slide-exit slide-exit-active*/}
              <NavSearch className={this.state.focused ? 'focused': ''}
              onFocus={this.handleInputFocus}
              onBlur = {this.handleInputBlur}></NavSearch>
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe63f;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><span className="iconfont">&#xe62e;</span>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
      )
  }
}

export default Header