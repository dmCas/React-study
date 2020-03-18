import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会焦点',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/6479080-d00792cf897704cb.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15517692-7a1b517edb1eff6d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
  ]
});

export default (state = defaultState, action) => {
  return state
}