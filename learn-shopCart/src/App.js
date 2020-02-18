import React, {Component} from 'react'
// import ReactDom from 'react-dom'
// import logo from './logo.svg'

//函数型组件传递props
// function Welcome1(props) {
//   return <div>Hello, {props.name}</div>
// }

export default class App extends Component {
  constructor(props) {
    super(props) 
    // 初始状态
    this.state = {
      count: 0,
      goods:['蒋老湿精品图书-十分钟学编程',
             '蒋老湿精品图书-轻松学Java',
             '蒋老湿精品图书-轻松学React'],
      text: '',
      cart: []
    }
    this.addGoods = this.addGoods.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.showCart = this.showCart.bind(this)
    this.reduce = this.reduce.bind(this)
    this.add = this.add.bind(this)
  }
  //组件渲染完成之后
  // componentDidMount () {
  //   this.timer = setInterval (()=> {
  //     //更新状态
  //     this.setState({
  //       date: new Date(),
  //       count: this.state.count + 1
  //     })
  //   }, 1000)

  //   // 注意： setState() 是异步
  //   this.setState((prevState, prevProps) => ({
  //     count: prevState.count + 1
  //   }), () => {
  //     console.log(this.state.count)
  //   })
  // }

  // componentWillMount () {
  //   clearInterval(this.timer)
  // }

  // formatName(user){
  //   return user.firstName + ' ' + user.lastName
  // }
  handleInput(e){
    this.setState({
      text: e.target.value
    })
  }
  addGoods(){
    this.setState(state => ({
        goods: [...new Set([...state.goods, state.text])]
    }))
  }
  showCart(item){
    this.setState(state => ({
      cart: [...new Set([...state.cart,item])]
    }))
    console.log(this.cart)
  }
  reduce(){

  }
  add(){
    
  }
  render () {
    // const name = '北辰'
    // const jsx = <p>hello, 同学们</p>
    return (
      <div>
        <h1>React 购物车</h1>
        {/* {jsx} */}
        {/* <Welcome1 name="tom" />
        <p>{this.state.date.toLocaleTimeString()}</p> */}
        <input type="text" onChange={this.handleInput}/>
        <button onClick={this.addGoods}>添加商品</button>
        <ul>
          {
            this.state.goods.map((item) => {
              return (<li key={item}>
                      {item}
                      <button onClick={() =>this.showCart(item)}>添加</button>
                     </li>)
            })
          }
        </ul>
        {this.state.cart.map((good) => {
          return <div key={good}>
                  {good}
                  <button onClick={this.reduce}>-</button>1<button onClick={this.add}>+</button>
                 </div>
        })}
      </div>
    )
  }
}

// export default class Cart extends Component{

// }