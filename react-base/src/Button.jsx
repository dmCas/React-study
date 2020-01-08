import React from 'react'

function Button(props) {
  let date = new Date().getTime();
  // 通知父组件
  const handleClick = () => {
    console.log(1234);
  }
  const { type, children, receiveFromButton } = props;
  //父传递一个回调函数过来， 子组件通过参数通知父组件
  receiveFromButton(date);
  return (
    <button onClick={handleClick} className={type === 'primary' && 'primary-class'}>{children}</button> 
  )
}
export default Button;