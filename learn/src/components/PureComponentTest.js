import React, {Component, PureComponent} from 'react'
// PureComponent 组件, 其实就是定制化后的 shouldComponentUpdate 的加强

// shouldComponentUpdate 的加强版
class PureComponentTest extends Component {
  constructor(props){
    super(props)

    this.state = {
      comment: [
        { body: 'react is very good', author: 'facebook'},
        { body: 'vue is very good', author: '尤雨溪'}
      ]
    }
    setTimeout (() => {
      this.setState({
        comment: [
          { body: 'react is very good', author: 'facebook'},
          { body: 'vue is very good', author: '尤雨溪'}
        ]
      })
    }, 2000)
  }

  render () {
    // console.log('render')
    return (
      <div>
        {this.state.comment.map((c,i) => (
          <Comment key={i} data={c} />
        ))}
      </div>
    )
  }
}

// PureComponent节流没必要更新的时候不更新 Component只要数据源被操作就会更新
// class Comment extends Component 
class Comment extends PureComponent {
  constructor(props){
    super(props)
  }
  // shouldComponentUpdate(nextProp) {
  //   console.log(nextProp)
  //   if (nextProp.data.body === this.props.data.body && nextProp.data.author === this.props.data.author) {
  //     console.log(false)
  //     return false
  //   }
  //   console.log(true)
  //   return true
  // }
  render () {
    console.log('render')
    return (
      <div>
        <p>{this.props.data.body}</p>
        <p>--{this.props.data.author}</p>
      </div>
    )
  }
}

export default PureComponentTest;
