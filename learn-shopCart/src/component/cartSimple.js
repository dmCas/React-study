import React, { Component } from 'react'

function Cart (props) {
  return (
    <table>
      <tbody>
        {props.data.map((item) =>(
          // 循环 tr
          <tr key={item.text}>
            <td>{item.text}</td>
            <td>
              <button>-</button>
              {item.count}
              <button onClick={() => props.addCount(item)}>+</button>
            </td>
            <td>￥{item.price * item.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default class CartSimple extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '', //选择的商品名
      goods: [
        { id:1, text: '你不知道的javaScript', price:66},
        { id:2, text: '你不知道的Vue', price:123},
        { id:3, text: '你不知道的React', price:111}
      ],
      cart: [],
      history: []
    }
    this.textChange = this.textChange.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.addCount = this.addCount.bind(this)
    this.addGoods = this.addGoods.bind(this)
  }
  addGoods(){
    this.setState(prevState => ({
      goods: [...prevState.goods, {id: prevState.id, text:prevState.text, price:prevState.price}]
    }))
    setTimeout(()=>{
      console.log(this.state.goods)
    },1000)

  }
  textChange = e => {
    // console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }
  addToCart (good) {
    // 为了保证视图更新， 数组要保证引用地址变化
    const newCart = [...this.state.cart]
    // 查询商品对应的购物项是否存在
    const idx = newCart.findIndex(c => c.text === good.text)
    // 如果存在则取出
    const item = newCart[idx]

    if (item) {
      // 更新对象
      newCart.splice(idx, 1, {...item, count: item.count + 1})
    }
    else {
      newCart.push({...good, count :1})
    }
    this.setState({
      cart: newCart,
      history: [...this.state.history, newCart]
    })
  }

  addCount = item => {
    const newCart = [...this.state.cart]
    // find() return true or false
    //findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
    const idx = newCart.findIndex( c => c.text === item.text)
    newCart.splice(idx, 1, {...item, count: item.count + 1})
    this.setState({
      cart: newCart,
      history: [...this.state.history, newCart]
    })
  }
  reduce = item => {
    
  }
  //历史记录
  go (his) {
    this.setState({
      cart: his
    })
    console.log(his)
  }

  render() {
    const title = this.props.title ? <h1>{this.props.title}</h1>: null
    const goods = this.state.goods.map((good) => {
      return (<li key={good.id}>
        {good.text}
        <button onClick={() => this.addToCart(good)}>加购</button>
      </li>)
    })
    return (
      <div>
        {title}
        <div>
          <input type="text" value={this.state.text} onChange={e => this.textChange(e)}/>
          <button onClick={this.addGoods}>添加商品</button>
        </div>

        {/* 列表渲染 */}
        <ul>
          {goods}
        </ul>

        {/* 购物车列表 */}
        {/* 传递函数用于子组件和父组件交互 */}
        <Cart data={this.state.cart} addCount = {this.addCount} reduceCount = {this.reduceCount}></Cart>

        {this.state.history.length > 0 ? <p>历史操作</p> : null}
        {this.state.history.length > 0 ? <button key="-1" onClick={() => this.setState({cart: []})}>0</button>: null}
        {this.state.history.map((his, i) => (
          <button key={i} onClick={() => this.go(his)}>
            {i + 1}
          </button>
        ))}
      </div>
    )
  }
}