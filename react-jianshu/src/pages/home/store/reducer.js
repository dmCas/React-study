import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList:[],
  recommendList: [],
  acticlePage: 1,
  showScroll: false  
});

const changeHomeData = (state, action) => {
  return state.merge({ //把多个对象合并成一个对象
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.article),
    recommendList: fromJS(action.recommendList),
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList:state.get('articleList').concat(action.articleList),
    acticlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  if(action.type === constants.CHANGE_HOME_DATA){
    return changeHomeData(state, action)
  }
  if(action.type === constants.ADD_ATRICLE_LIST){
    return addArticleList(state, action)
    // return state.set('articleList', state.get('articleList').concat(action.articleList))
  }
  if(action.type === constants.TOGGLE_SCROLL_TOP){
    return state.set('showScroll' ,action.show)
  }
  return state
}