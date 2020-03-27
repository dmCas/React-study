import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  Header,
  Temperature,
  Extra,
  Echartcontaier,
  MoreInfo,
  MoreWrapper,
  MoreDay
} from './style'
import { CaretDownOutlined } from '@ant-design/icons';
import WeatherCircle from './component/cloudy'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foreData: [],
      preWeather:[]
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
      weather.getForecast(city, function (err, data) {
        _self.setState({
          preWeather: data.forecasts
        })
        data.forecasts.map((item) => (
          _self.state.foreData.push(item.dayTemp)
        ))
        // console.log(_self.state.preWeather)
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
          _self.initWeather(_self.props.city)
        }
      })
    })

  }
  initEchart(array) {
    let domChart = this.dom;
    //eslint-disable-next-line
    var myChart = echarts.init(domChart);
    let option = null;
    option = {
      title : {
        show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '天气变化趋势',//主标题文本，'\n'指定换行
        x:'center',
        textStyle: { //图例文字的样式
          color: 'grey',
        },
        padding: [5,0,30,10]
      },
      xAxis: {
        show: false,
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        },
       
        grid:{bottom: "20"}
      },
      yAxis: {
        show: false
      },
      series: [
        {
          data: array,
          type: "line",
          itemStyle: {
            normal:
            {
              label: {
                show: true,
                formatter: "{c}℃"
              },
              lineStyle:{
                color:'white' //改变折线颜色
              },
              color: '#eee'
            },
          }
        }
      ]
    }
    myChart.setOption(option, true);
  }
  render() {
    const { city, weatherData } = this.props
    // console.log(this.state.preWeather)
    const reportTime = new String(weatherData.reportTime)
    // console.log(reportTime.split(' ')[1])
    return (
      <HomeWrapper imgUrl={require('../../static/img/4.jpg')}>
        <Link to="/search">
          <Header><span>{city}</span><CaretDownOutlined /></Header>
        </Link>
        <Temperature>
          <h2>{weatherData.temperature}°</h2>
          <span>{weatherData.weather}</span><span>|</span>  
          <span>更新时间:{reportTime.split(' ')[1]}</span>
          <Extra>
            <dl>
              <dt>风力：{weatherData.windPower} | 风向： {weatherData.windDirection} | 空气湿度： {weatherData.humidity}%</dt>
            </dl>
          </Extra> 
        </Temperature>
        <WeatherCircle />
        <MoreInfo>
          <MoreWrapper>
            {
              this.state.preWeather.slice(1,4).map((item) => (
                <MoreDay key={item.date}>
                  <p>{item.date.substring(5)}</p>
                  <img alt="" src={require('../../static/img/' + `${item.dayWeather}.png`)}></img>
                  <div className="temp">
                    <p>25℃</p>
                    <p>12℃</p>
                  </div>
                  <p>{item.dayWeather}</p>
                </MoreDay>
              ))
            }
          </MoreWrapper>
        </MoreInfo>
        <Echartcontaier ref={(echart) => { this.dom = echart }}></Echartcontaier>
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