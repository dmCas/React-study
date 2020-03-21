import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class List extends Component {
  render() {
    const { page } = this.props
    return (
      <div>
        {
          this.props.articleList.map((item,index) => {
            return (
              <ListItem key={index}>
                <a href="/detail">
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
                </a>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => (
  {
    articleList: state.home.get('articleList'),
    page: state.home.get('acticlePage')
  }
)

// 加载更多需要ajax接口异步请求
const mapDispatch = (dispatch) => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)