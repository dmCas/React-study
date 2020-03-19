import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    // const { articleList } = this.props
    return (
      <div>
        {
          this.props.articleList.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => (
  {
    articleList: state.home.get('articleList')
  }
)

export default connect(mapState, null)(List)