import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { actionCreators as LoginActionCreators} from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        NavSearch,
        Addition,
        Button,
        SearchWrapper
      }from './style'

const Header = (props) =>  {
    const { login, logout } = props
    return (
      <HeaderWrapper >
        <Logo />
        <Nav>
          <NavItem className="left">
            <a href="/" className="active">首页</a>
          </NavItem>
          <NavItem className="left">下载APP</NavItem>
         
            {
              login ? <NavItem onClick={logout} className="right">退出</NavItem>
              : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
            }
          
          <NavItem className="right">
            <span className="iconfont">&#xe698;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200} 
              in={props.focused}
              classNames="slide"
            >
              {/* slider-enter slider-enter-active slide-exit slide-exit-active*/}
              <NavSearch className={props.focused ? 'focused': ''}
              onFocus={props.handleInputFocus}
              onBlur = {props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <span className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe63f;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting"><span className="iconfont">&#xe62e;</span>写文章</Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
      )
}

//取store数据 将仓库中store映射到props
const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    login: state.login.get('login')
  }
}

// store.dispatch ===> props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = actionCreator.searchFocus()
      dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreator.searchBlur()
      dispatch(action)
    },
    logout() {
      dispatch(LoginActionCreators.login_off())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)