import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, 
         HomeLeft, 
         HomeRight,
         BackTop 
       } from './style'
import { actionCreators } from './store'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop () {
    window.scrollTo(0,0)
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="##" src="https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})

const mapDispatch = (dispatch) => {
  return {
    changeHomeData(){
      const action = actionCreators.getHomeInfo()
      //只有使用中间件才能dispatch一个函数
      dispatch(action)
    },
    changeScrollTopShow(e) {
      if (document.documentElement.scrollTop > 100){
        dispatch(actionCreators.toggleShow(true))
      }
      else{
        dispatch(actionCreators.toggleShow(false))
      }
      console.log(document.documentElement.scrollTop)
    }
  }
}


export default connect(mapState, mapDispatch)(Home)