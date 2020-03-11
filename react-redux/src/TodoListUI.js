import React, { Component } from 'react'
import { Input, Button, List} from 'antd'

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginLeft: '10px', marginTop: '10px' }}>
//         <div>
//           <Input placeholder="Write data" value = {this.props.inputValue} style={{ width: 300 }} 
//           onChange={this.props.handleInputChange}/>
//           <Button type="primary" style={{ marginLeft: 10 }} onClick={this.props.handleBtnSubmit}>提交</Button>
//         </div>
//         <List
//           style = {{marginTop: '10px', maxWidth:'300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => 
//             <List.Item onClick={(index) => (
//               this.props.handleItemDelete(index)
//               )}>
//               {item}
//             </List.Item>}
//         />
//       </div>
//     )
//   }
// }

const TodoListUI = (props) => {
  return (
    <div style={{ marginLeft: '10px', marginTop: '10px' }}>
      <div>
        <Input placeholder="Write data" value = {props.inputValue} style={{ width: 300 }} 
        onChange={props.handleInputChange}/>
        <Button type="primary" style={{ marginLeft: 10 }} onClick={props.handleBtnSubmit}>提交</Button>
      </div>
      <List
        style = {{marginTop: '10px', maxWidth:'300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => 
          <List.Item onClick={() => (
            props.handleItemDelete(index)
            )}>
            {item}
          </List.Item>}
      />
    </div>
  )
}

export default TodoListUI