import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
class Detail extends Component {
  componentWillMount() {
    this.props.getDetail()
  }

  render() {
    return (
      <DetailWrapper >
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
        </Content>
      </DetailWrapper >
    )
  }
}

const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail)