import React, { Component } from 'react'
import { List } from 'antd'
import './star.less'

class Collect extends Component {
  constructor(props) {
    super (props)
    this.state = {
        "data": [
          {
            "createdAt": "2019-04-10 10:19",
            "updatedAt": "2019-04-10 10:19",
            "id": 3,
            "title": "React 16 加载性能优化指南",
            "url": "https://juejin.im/post/5b506ae0e51d45191a0d4ec9"
          },
          {
            "createdAt": "2019-03-30 14:02",
            "updatedAt": "2019-03-30 14:02",
            "id": 2,
            "title": "CentOS7 系统目录详解和常用命令[文件和目录]",
            "url": "https://blog.csdn.net/qq_22860341/article/details/81363655"
          }
        ],
        "total": 2,
        "code": 1000,
        "desc": "success"
    }
  }
  render () {
    const pagination = {
      pageSize: 10,
      size: 'small',
      current: 1,
      total: 2,
     
    }
    return (
      <List
      className="star-list"
      itemLayout="vertical"
      header={<div className="star-header">文章收藏</div>}
      dataSource = {this.state.data}
      pagination={this.state.data.length ? pagination : null}
      renderItem = {item => (
        <List.Item key={item.id}>
          <List.Item.Meta description={[<a href={item.url}>{item.title}</a>]}></List.Item.Meta>
        </List.Item>
      )}
      >

      </List>
    )
  }
}

export default Collect