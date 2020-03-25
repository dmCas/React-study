import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  Header,
  Temperature,
  Extra,
  Forecast,
  Current,
  Next
} from './style'
import { CaretDownOutlined } from '@ant-design/icons';
import { Tag } from 'antd'
import WeatherCircle from './component/cloudy'

class Home extends Component {

  initWeather(city) {
    let _self = this
    //eslint-disable-next-line
    AMap.plugin('AMap.Weather', function () {
      //eslint-disable-next-line
      var weather = new AMap.Weather();
      //执行实时天气信息查询
      weather.getLive(city, function (err, data) {
        // console.log(err, data);
        _self.props.getWeather(data)
      });
      weather.getForecast(city, function(err, data) {
        console.log(err, data);
      });
    });
  }
  componentDidMount() {
    // 防止作用域被修改
    let _self = this;
    //eslint-disable-next-line
    AMap.plugin('AMap.CitySearch', function () {
      //eslint-disable-next-line
      var citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          // 查询成功，result即为当前所在城市信息
          // this.getCity(result.city)
          _self.props.getCity(result.city)
          _self.initWeather(result.city)
        }
      })
    })
  }


  render() {
    // console.log(this.props.weatherData)
    const { city, weatherData } = this.props
    return (
      <HomeWrapper imgUrl={require('../../static/img/1.jpg')}>
        <Header><span>{city}</span><CaretDownOutlined /></Header>
        <Temperature>
          <h2>{weatherData.temperature}°</h2>
          <span>{weatherData.weather}</span><span>|</span>
          {
            weatherData.humidity < 50 ? <Tag color="green"><span className="iconfont">&#xe663;</span>{weatherData.humidity} 优</Tag> :
              weatherData.humidity < 80 ? <Tag color="blue"><span className="iconfont">&#xe663;</span>{weatherData.humidity} 良</Tag> :
                <Tag color="red">{weatherData.humidity} 差</Tag>
          }
          <Extra>
            <dl>
              <dt>风力：{weatherData.windPower} | 风向： {weatherData.windDirection} | 空气湿度： {weatherData.humidity}%</dt>
            </dl>
          </Extra>
          <Forecast>
            <Current>
              <div className="left">
                <p>今天</p>
                <p>中雨</p>
              </div>
              <div className="right">
                <p>今天</p>
                <p><img src={require('../../static/img/qing.png')} alt=""></img></p>
              </div>
            </Current>
            <Next>
            </Next>
          </Forecast>
        </Temperature>
        <WeatherCircle />
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  city: state.home.get('city'),
  weatherData: state.home.get('weatherData')
})


const mapDispatch = (dispatch) => ({
  getCity(city) {
    dispatch(actionCreators.getCity(city))
  },
  getWeather(data) {
    dispatch(actionCreators.getWeather(data))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Home))