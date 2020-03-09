import React from 'react'

const withMosu = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0}
    handleMouseMove  = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
      console.log(event)
    }
    render () {
      return (
        <div style = {{height: '100vh'}} onMouseMove = {this.handleMouseMove}>
          <Component {...this.props} mouse={this.state}/>
        </div>
      )
    }
  }  
}

// 定义一个纯函数无状态的组件
const App = (props) => {
  const { x, y } = props.mouse
  return (
    <div style = {{height: '100vh'}}>
      <h1>The mouse position is ({x}, {y})</h1>
    </div>
  )
}

// const test = () => {
//   return (
//     <div>{x}, {y}</div>
//   )
// }

const AppWithMouse = withMosu(App) // 高阶组件替组件干活

export default AppWithMouse 