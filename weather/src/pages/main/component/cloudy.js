import React from 'react'
import { Cloudy, Sunny } from './style'

class WeatherCircle extends React.Component {
  render() {
    return (
        <Cloudy>
          <span className="cloud"></span>
        </Cloudy>
        // <Sunny>
        //   <span className="sun"></span>
        // </Sunny>
        
    )
  }
}

export default WeatherCircle