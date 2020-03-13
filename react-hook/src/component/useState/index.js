import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  addCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <p>你点了{this.state.count}次</p>
        <button onClick={this.addCount.bind(this)}>Click me</button>
      </div>
    )
  }
}

export default Example