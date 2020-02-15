// 入口
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// class App extends React.Component {
//   render () { // jsx props
//     return <div>
//             Hello {this.props.name}, I am {9 + 9} years old
//            </div>
//   }
// }

// state
class Counter extends React.Component {
  constructor (props) {
    // super() 超级继承
    super(props)
    // 初始化构造器时设置内部状态 num值为 1 || state ———> React.Component
    this.state = {
      num: 1
    }
    // 绑定handleClick作用域使其能访问Counter作用域内容
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // 读取不到this.state.num
    this.setState({
      num: this.state.num + 1
    })
    console.log(123)
  }
  render() {
    return (
    <div>
      <p>{this.state.num}</p>
      <button onClick={this.handleClick}>click</button>
    </div>
    )
  }
}

//渲染函数
ReactDOM.render(<Counter/>, document.querySelector('#root'))