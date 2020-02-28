import React from 'react'
import { Layout, Avatar, Input, Row, Col, Menu, Dropdown, Badge } from 'antd'
import { UserOutlined, SmileTwoTone } from '@ant-design/icons'
// 路由匹配组件 路由组件
import { Route, Link } from 'react-router-dom'

function DropMenu () {
  return (
    <Menu>
      <Menu.Item key="0">
        <a href="#">修改密码</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">退出登录</a>
      </Menu.Item>
    </Menu>
  )
}

const {SubMenu} = Menu
const { Header, Sider, Content, Footer } = Layout
class PageLayout extends React.Component {
  render () {
    return (
      <Layout >
        <Header style={{ color: '#fff', textAlign: 'center', fontWeight:'bolder'}}>
          <Row>
            <Col span={10}>React + Antd 实践</Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的..."/>
            </Col>
            <Col span={6}>
              <Avatar icon={<UserOutlined />} style={{backgroundColor: '#666', marginRight: 20}}/>
              <Dropdown overlay={DropMenu}>
                <a>Hi, Beichen</a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout style={{position:'relative'}}>
          <Sider>
            {/* defaultOpenKeys={['sub1']} defaultSelectedKeys={['sub1-1']} */}
            <Menu  mode="inline"  style={{width: 256, height: '90vh', overflow: 'none', minWidth: 256}}>
              <SubMenu key="sub1" title={<span><SmileTwoTone />部分UI组件实践</span>}>
                <Menu.Item key="sub1-1">表格展示</Menu.Item>
                <Menu.Item key="sub1-2">标签页面</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><SmileTwoTone />算法练习</span>}>
                <Menu.Item key="sub2-1">分治算法</Menu.Item>
                <Menu.Item key="sub2-2">贪心算法</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Content style={{marginLeft: '5%'}}>
            {/* 实现这个效果，点击菜单'表格展示'--路由：http://localhost3000/table
                右边展示一个Tabble表格 */}
          </Content>

          <Footer style={{boxSizing: "border-box", position:'absolute', bottom:0, left:256, textAlign:'center'}}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default PageLayout