import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import routes from '../../../Router/web'
import './index.less'
import { Layout, Col, BackTop } from 'antd'

import HeaderCustom from '../header'
import SiderCustom from '../sider'

const { Content, Footer } = Layout
class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount () {
    document.title = 'React blog'
  }

  render() {
    const contentHeight = document.body.clientHeight - 64 -62
    return (
      <div>
        <Layout className="wrapper">
          <HeaderCustom></HeaderCustom>

          <Layout className="wrapper-container">
            <Layout className="wrapper-content">
              <Content style={{ display:'flex', paddingTop: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}}>
                <Col
                  lg={{ span: 5, offset: 1 }}
                  md={{ span: 6, offset: 1 }}
                  xs={{ span: 0 }}>
                  <SiderCustom />
                </Col>

                <Col
                  lg={{ span: 16, offset: 1 }}
                  md={{ span: 16, offset: 1 }}
                  xs={{ span: 24 }}
                  className="about-wrapper">
                  {
                    routes.map(({ path, key, component, ...props }, index) => (
                      <Route key={index}
                        exact
                        path={path}
                        component={component}
                        {...props}
                      />
                    ))
                  }
                </Col>
              </Content>


            </Layout>
            <Footer>personal blog</Footer>
          </Layout>

        </Layout>

      </div>
    )
  }
}

//被Router/index所拿到
export default Index
