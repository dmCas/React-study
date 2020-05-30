// 副作用 -- hooks模式下状态 {state} 发生变更的时候提供给我们做额外操作的地方
import React, { useState, useEffect } from 'react'
function Example () {
  const [ count, setCount ] = useState(0)

  // 不需要考虑时间刻度
  // 首次渲染和每一次渲染都会执行
  useEffect(() => {
    console.log(`你点击了 ${count}次`)
    // axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then(
    //         (res) => {
    //           const data = res.data 
    //           console.log(data)
    //         }
    //       )
  })

  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
    </div>
  )
}

export default Example

