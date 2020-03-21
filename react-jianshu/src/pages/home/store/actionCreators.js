import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  article: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (articleList, nextPage) => ({
  type: constants.ADD_ATRICLE_LIST,
  articleList: fromJS(articleList),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      const action = addHomeList(result, page + 1)
      dispatch(action)
    })
  }
}

export const toggleShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show: show
})