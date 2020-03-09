import React, { useState, useEffect, useRef } from 'react'

function Example () {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    inputEl.current.value = '猛哥aaaa'
    console.log(inputEl)
  }

  const [text, setText] = useState('猛哥')
  const textRef = useRef()

  // 初次渲染执行
  useEffect(() => {
    textRef.current = text
    console.log(textRef.current)
  })

  return (
    <div>
      <input ref={inputEl} type="text"></input>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/>
      <input value={text} onChange={e => {setText(e.target.value)}}></input>
    </div>
  )
}

export default Example