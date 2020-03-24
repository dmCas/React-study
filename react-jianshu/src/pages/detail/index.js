import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  render() {
    console.log(this.props.location.search)
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
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))