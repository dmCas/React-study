import React from 'react'


class User extends React.Component {
  inputElement = null

  sayHello () {
    console.log('hello world')
  }

  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
    this.onChaneg = this.focus.bind(this)
  }

  state = {
    name: '',
    age: 0
  }

  focus () {
    this.inputElement.focus()
  }

  onChange = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      age: this.props.age
    })
  }

  render () {
    return (
      <div>
        <div>姓名： {this.state.name}</div>
        <div>
          年龄:
          <input type="number" value={this.state.age}
          onChaneg = {this.onChange}
          ref={input => {
            if (this.props.inputRef) {
              this.props.inputRef(input) // 父组件传入的ref回调函数
            }
            this.inputElement = input
          }}>

          </input>
        </div>

        <div>
          <button onClick={this.focus}>获取输入框焦点</button>
        </div>
      </div>
    )
  }
}

export default User