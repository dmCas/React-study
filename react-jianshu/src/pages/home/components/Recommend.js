import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>

              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('recommendList')
})

export default connect(mapState, null)(Recommend)