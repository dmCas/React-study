import React, { Component } from 'react'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      num : 5
    }

    this.Time = this.Time.bind(this)
  }
  componentDidMount(){
    this.Time()
  }
  Time () {
    setTimeout(() => {
      this.setState({
        num: 1111111111111111111111111
      })
    }, 1000)
  }
  render() {
    return <div>
      {this.state.num}
    </div>
  }
}

export default Home