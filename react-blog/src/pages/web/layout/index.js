import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import routes from '../../../Router/web'

class Index extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
    }
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

//被Router/index所拿到
export default Index
