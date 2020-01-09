import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput'

class App extends React.Component {
  // 静态属性
  state = {
    commentList: [

    ]
  }
  onPublish = (userName, comment) => {
    // console.log(userName, comment);
    let c = {userName,comment}
    //不可变数据
    //指向同一个对象
    // let obj = {}; let obj1 = obj; obj1.name = 'li'
    // let obj1= Object.assign({}, obj)
    let list = this.state.commentList.slice(0);
    list.push(c)
    console.log(list)
    // this.state.commentList = list
    this.setState({
      commentList: list
    })
  }
  handleDel = (event) => {
    // del i ?
    // data-i 
    
    const i = parseInt(event.target.dataset.i)
    const list = this.state.commentList.slice(0)
    list.splice(i,1);
    this.setState({
      commentList: list
    })
  }
  render() {
    return (
      <>
        <CommentInput onPublish={this.onPublish}/>
        { this.state.commentList.length }
        {/* <CommentList/>    */}
        {
          this.state.commentList && this.state.commentList.map(
            (c, i) => {
              return (
                <li key={i}>
                  {c.userName}: {c.comment}
                  <button data-i={i} onClick={this.handleDel}>删除</button>
                </li>
              )
            }
          )
        }
      </> 
    )
  }
}

export default App;
