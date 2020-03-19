import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, 
         HomeLeft, 
         HomeRight 
       } from './style'
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount () {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        article: result.articleList,
        recommendList: result.recommendList
      }
      console.log(action.article)
      this.props.changeHomeData(action)
    })
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
      </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData(action){
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatch)(Home)