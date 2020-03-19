import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList:[],
  recommendList: []
});

export default (state = defaultState, action) => {
  if(action.type === 'change_home_data'){
    console.log(122222)
    return state.merge({ //把多个对象合并成一个对象
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.article),
      recommendList: fromJS(action.recommendList),
    })
  }
  return state
}