import React from 'react'

class MyCount extends React.Component{
  state = {
    count: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render () {
    return <span>{this.state.count}</span>
  }
}

export default MyCount