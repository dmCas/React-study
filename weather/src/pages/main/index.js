import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  Header,
  Temperature,
  Extra,
  Echartcontaier
} from './style'
import { CaretDownOutlined } from '@ant-design/icons';
import { Tag } from 'antd'
import WeatherCircle from './component/cloudy'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      foreData : []
    }
  }
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
        data.forecasts.map((item) => {
          _self.state.foreData.push(item.dayTemp)
        })
        console.log(_self.state.foreData)
        _self.initEchart(_self.state.foreData)
        // _self.props.getForecast(data.forecasts)
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
  initEchart(array){
    console.log(array)
    let domChart = this.dom;
    //eslint-disable-next-line
    var myChart = echarts.init(domChart);
    let app = {},option = null;
    option = {
      xAxis: {
        show: false,
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        }
      },
      yAxis: {
        show: false,
        axisTick: {
          show: false,
          lineStyle: {
            color: "#fff"
          }
        },
        axisTick: { show: true },
        splitLine: { show: false }
      },
      series: [
        {
          data: array,
          type: "line"
        }
      ],
      tooltip: {
        trigger: "axis",
        formatter: function(params) {
          var relVal = params[0].name;
          for (let i = 0, l = params.length; i < l; i++) {
            relVal += params[i].value + "℃";
          }
          return relVal;
        }
      }
    }
    myChart.setOption(option, true);
  }

  render() {
    // console.log(this.props.weatherData)
    const { city, weatherData } = this.props
    return (
      <HomeWrapper imgUrl={require('../../static/img/4.jpg')}>
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
        </Temperature>
        <WeatherCircle />
        <Echartcontaier ref={(echart) => {this.dom = echart}}></Echartcontaier>
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  city: state.home.get('city'),
  weatherData: state.home.get('weatherData'),
  forecast: state.home.get('forecast')
})


const mapDispatch = (dispatch) => ({
  getCity(city) {
    dispatch(actionCreators.getCity(city))
  },
  getWeather(data) {
    dispatch(actionCreators.getWeather(data))
  },
  getForecast(data) {
    dispatch(actionCreators.getForecast(data))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Home))