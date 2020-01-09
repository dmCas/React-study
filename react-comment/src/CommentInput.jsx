import React from 'react'

class CommentInput extends React.Component{

  handlePublish = () => {
    const userName = this.refs.userName.value;
    const comment = this.refs.comment.value;
    // 通知父组件 存在数组里面
    const { onPublish } = this.props;
    onPublish(userName, comment)
  }
  render() {
    return (
      <>
        用户名： <input type="text" ref="userName"/>
        评论内容： <input type="text" ref="comment"/>
        <button onClick={this.handlePublish}>发布</button>
      </>
    )
  }
}
export default CommentInput;