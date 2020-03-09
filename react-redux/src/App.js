// Redux = flux + Reduce
import React, { Component } from 'react'
import { Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
import store from './store/index.js'


// store 的创建

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(store.getState())
  }
  render() {
    return (

      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <div>
          <Input value={this.state.inputValue} style={{ width: 300 }} />
          <Button type="primary" style={{ marginLeft: 10 }}>提交</Button>
        </div>
        <List
          style = {{marginTop: '10px', maxWidth:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoList