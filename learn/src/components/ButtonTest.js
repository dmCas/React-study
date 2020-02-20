import React, { Component } from 'react'
import Button from 'antd/lib/button'
import 'antd/dist/antd.css'

class ButtonTest extends Component {
  render () {
    return (
      <div className="App">
        <Button type="danger">危险</Button>
      </div>
    )
  }
}
export default ButtonTest