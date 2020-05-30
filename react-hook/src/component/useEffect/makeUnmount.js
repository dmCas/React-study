// componentWillUnmount 组件卸载之前
// useEffect 实现组件componentWillUnmount (解绑副作用)

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 副作用 -- hooks模式下状态 {state} 发生变更的时候提供给我们做额外操作的地方
import React, { useState, useEffect } from 'react'
function Example () {
  const [ count, setCount ] = useState(0)

  // 不需要考虑时间刻度
  // 首次渲染和每一次渲染都会执行
  useEffect(() => {
    console.log(`你点击了 ${count}次`)

    return () => {
      console.log('-----------------你离开了页面，组件卸载')
    }
  },[])

  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
      
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li>
            <Link to="/list">列表</Link>
          </li>
          <Route exact path="/" component={Index}></Route>
          <Route path="/list" component={List}></Route>
        </ul>
      </Router>
    </div>
  )
}

function Index () {
  useEffect(() => {
    console.log('useEffect => 这里是Index页面')
    return () => {
      console.log('你离开了Index页面')
    }
  }, [])
  return <h2>React Hooks</h2>
}

function List () {
  useEffect(() => {
    console.log('useEffect => 这里是List页面')
  }, [])//[] 组件被销毁的时候进行解绑
  return <h2>List-Page</h2>
}

export default Example

