import React from 'react'
import { Layout, Avatar, Input, Row, Col, Menu, Dropdown, Badge, Table, Tag } from 'antd'
import { UserOutlined, SmileTwoTone } from '@ant-design/icons'
// 路由匹配组件 路由组件
import { Route, Link } from 'react-router-dom'

function DropMenu() {
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

function Table1() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>Invite {record.name}</a>
          <a>Delete</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <div>
      <h3>Table</h3>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

const { SubMenu } = Menu
const { Header, Sider, Content, Footer } = Layout
class PageLayout extends React.Component {
  render() {
    return (
      <Layout >
        <Header style={{ color: '#fff', textAlign: 'center', fontWeight: 'bolder' }}>
          <Row>
            <Col span={10}>React + Antd 实践</Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的..." />
            </Col>
            <Col span={6}>
              <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#666', marginRight: 20 }} />
              <Dropdown overlay={DropMenu}>
                <a>Hi, Beichen</a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout style={{ position: 'relative' }}>
          <Sider>
            {/* defaultOpenKeys={['sub1']} defaultSelectedKeys={['sub1-1']} */}
            <Menu mode="inline" style={{ width: 256, height: '90vh', overflow: 'none', minWidth: 256 }}>
              <SubMenu key="sub1" title={<span><SmileTwoTone />部分UI组件实践</span>}>
                <Menu.Item key="sub1-1">
                  <Link to={{pathname: '/table', search: '?id=1'}}>表格展示</Link>
                </Menu.Item>
                <Menu.Item key="sub1-2">
                  <Link to="/">标签页面</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><SmileTwoTone />算法练习</span>}>
                <Menu.Item key="sub2-1">分治算法</Menu.Item>
                <Menu.Item key="sub2-2">贪心算法</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Content style={{ marginLeft: '5%' }}>
            {/* 实现这个效果，点击菜单'表格展示'--路由：http://localhost3000/table
                右边展示一个Tabble表格 */}

            {/* 路由匹配组件 */}
            <Route path="/table" component={Table1} />
          </Content>

          <Footer style={{ boxSizing: "border-box", position: 'absolute', bottom: 0, left: 256, textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default PageLayout