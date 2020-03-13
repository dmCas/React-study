- hooks 本质上就是一类特殊的函数 目的就是让你不再写 class, 让function一统江湖
# useState 就是一个hook
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );

#  react 是如何保证useState找到自己对应的state
   1. 是根据useState出现的顺序来确定的
   2. React hooks 不能出现再条件判断语句中， 因为他必须有完全一样的渲染顺序

# componentWillUpdate 
  数据源更改时执行该生命周期
  是再setState执行时，数据源更改之前执行

## useEffect 
   1. React 首次渲染和之后的每一次渲染都会调用useEffect
   2. useEffect里面定义的函数是异步执行的，他不会阻碍浏览器更新视图
  