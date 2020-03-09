import React from 'react'

function HOC (WrappedComponent) {
  let inputElement = null

  function handleClick() {
    inputElement.focus()
  }

  return ( props ) => (
    <div>
      <WrappedComponent {...props} inputRef={(el) => {inputElement = el}}/>
      <input type="button" value="获取子组件输入框焦点" onClick={handleClick}></input>
    </div>
  )
}

export default HOC