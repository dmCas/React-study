// 入口
import React from 'react'
import ReactDOM from 'react-dom'
import Lifecycle from './components/Lifecycle'
import CommentVs from './components/CommentVs'
import PureComponent from './components/PureComponentTest'
// import App from './App'

// class App extends React.Component {
//   render () { // jsx props
//     return <div>
//             Hello {this.props.name}, I am {9 + 9} years old
//            </div>
//   }
// }

// state
// class Counter extends React.Component {
//   constructor (props) {
//     // super() 超级继承
//     super(props)
//     // 初始化构造器时设置内部状态 num值为 1 || state ———> React.Component
//     this.state = {
//       num: 1
//     }
//     // 绑定handleClick作用域使其能访问Counter作用域内容
//     this.handleClick = this.handleClick.bind(this)
//   }
//   // 生命周期方法, 组件渲染完成, （执行一次）
//   componentDidMount() {
//     console.log('componentDidMount 函数触发')
//   }
//   // 生命周期方法, 避免组件重复或者无意义的渲染
//   shouldComponentUpdate(nextProps, nextState) {
//     // nextState 更新完成之后的数据值
//     // console.log(nextProps, nextState)
//     if (nextState.num % 2) {
//       return true
//     }
//     return false
//   }
//   handleClick() {
//     // 读取不到this.state.num
//     this.setState({
//       num: this.state.num + 1
//     })
//   }
//   render() {
//     return (
//     <div>
//       <p>{this.state.num}</p>
//       <button onClick={this.handleClick}>click</button>
//     </div>
//     )
//   }
// }

// 表单组件 
// class TodoList extends React.Component {
//   constructor(props) {
//     // 让TodoList这个类超级继承（父类中的方法）
//     super(props)
//     this.state = {
//       text: '你好',
//       todos: ['Learn React', 'Learn-Ant-design', 'Learn Koa']
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleClear = this.handleClear.bind(this)
//   }
//   handleChange(e) {
//     console.log(e.target.value)
//     this.setState({
//       text: e.target.value
//     })
//   }
//   handleClear() {
//     if (this.state.text) {
//       this.setState(state => ({
//         // todos: this.todos.push(this.text)
//         //将text值追加到todos数组里面
//         todos: [...state.todos, state.text]
//       }))
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.text}
//         <input type="text" onChange={this.handleChange} />
//         <button onClick={this.handleClear}>add</button>
//         <ul>
//           {this.state.todos.map((v) => {
//             return <li key={v}>{v}</li>
//           })}  
//           {/* <li  v-for="(item, index) in todos"></li> */}
//         </ul>
//       </div>
//     )
//   }
// }

//React 16 新增
/*
  1.render 函数支持返回数据和字符串
  2.异常处理， 添加componentDidCatch (函数获取组件错误)
  3.
*/
class React16 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  render () {
    return (
      <div>
        {this.state.hasError ? <div>出错了</div> : null}
        <ClickWriteError />
        <FeatureReturnFraments />
      </div>
    )
  }
}

//ClickWriteError 是一个组件
class ClickWriteError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error : false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      error: true
    })
  }
  render (){
    if(this.state.error){
      throw new Error('出错了！')
    }
    return <button onClick={this.handleClick}>抛出错误</button>
  }
}
//FeatureReturnFraments 是一个组件
class FeatureReturnFraments extends React.Component {
  render (){
    return [
      <p key="key1">React 很不错</p>,
      '文本1',
      <p key="key2">Ant-design也很赞</p>,
      '文本2'
    ]
  }
}



//渲染函数
ReactDOM.render(<PureComponent body='vue is very good' author='尤雨溪'/>, document.querySelector('#root'))