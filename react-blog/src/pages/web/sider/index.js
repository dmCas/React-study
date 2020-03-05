import React, { Component } from 'react'
import avatar from '../../../assets/img/avatar.jpg'
import { Card, Tag, Divider } from 'antd'
import { color } from '../../../utils(公共方法）'
import './index.less'
class SiderCustom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tags: [
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 1,
          "name": "Node"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 2,
          "name": "Vue"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 3,
          "name": "React"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 4,
          "name": "Koa"
        },
        {
          "createdAt": "2019-03-30 12:47",
          "updatedAt": "2019-03-30 12:47",
          "id": 5,
          "name": "Nginx"
        },
        {
          "createdAt": "2019-03-31 15:54",
          "updatedAt": "2019-03-31 15:54",
          "id": 7,
          "name": "Mysql"
        },
        {
          "createdAt": "2019-03-31 15:54",
          "updatedAt": "2019-03-31 15:54",
          "id": 8,
          "name": "Sequelize"
        },
        {
          "createdAt": "2019-04-10 18:49",
          "updatedAt": "2019-04-10 18:49",
          "id": 9,
          "name": "JS"
        },
        {
          "createdAt": "2019-04-10 20:15",
          "updatedAt": "2019-04-10 20:15",
          "id": 10,
          "name": "less"
        },
        {
          "createdAt": "2019-04-10 20:15",
          "updatedAt": "2019-04-10 20:15",
          "id": 11,
          "name": "axios"
        },
        {
          "createdAt": "2019-04-10 20:16",
          "updatedAt": "2019-04-10 20:16",
          "id": 12,
          "name": "xshell"
        },
        {
          "createdAt": "2019-04-10 20:17",
          "updatedAt": "2019-04-10 20:17",
          "id": 13,
          "name": "es6"
        },
        {
          "createdAt": "2019-11-11 10:59",
          "updatedAt": "2019-11-11 10:59",
          "id": 14,
          "name": "Jenkins"
        }
      ],
      articleData: []
    }
  }

  render() {
    return (
      <div className="sider-container">
        <div className="admin-info">
          <header>
            <img src={avatar} alt="avatar" title="hello world"/>
          </header>
          <h3 className="admin-name">
            北辰
          </h3>
          <p className="admin-desc">
            把coding变成一种爱好
            <br/>
            努力学习 找事做
          </p>
        </div>
        <div className="recent-article">
          <Card>
            <Divider orientation="left">最近文章</Divider>
            <ul className="recent-list">
              <li>JS数组去重</li>
              <li>JS实现防抖与节流</li>
              <li>前端面试100问</li>
              <li>mpvue+云开发+vuex实现爱彼迎小程序</li>
            </ul>
          </Card>
        </div>
        <div className="tags-wrapper">
          <Card>
            <Divider orientation="left">标签</Divider>
            <div className="tags-content">
              {
                this.state.tags.map(v => (
                    <Tag key={v.id} color={color[Math.floor(Math.random()*color.length)]} >{v.name}</Tag>   
                  )
                )
              }
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default SiderCustom