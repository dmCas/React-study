import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { actionCreators } from './store'
// import { Map, Marker } from 'react-amap';

class Home extends Component {
  componentWillMount(){
    //eslint-disable-next-line
    AMap.plugin('AMap.CitySearch', function () {
        //eslint-disable-next-line
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            // this.getCity(result.city)
            console.log(result.city)
          }
        })
    })
  }
  render() {
    return (
      <div></div>
    )
  }
}

const mapState = (state) => ({
  login: state.home.get('login'),

})


const mapDispatch = (dispatch) => ({
  getCity(city){
    dispatch(actionCreators.getCity(city))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Home))