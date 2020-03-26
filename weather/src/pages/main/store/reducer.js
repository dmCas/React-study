import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  city: '',
  cityHistory: [],
  weatherData: {},
  forecast:[]
})

export default (state = defaultState, action) => {
  if(action.type === actionTypes.CURRENT_CITY){
    return state.set('city', action.city)
  }
  if(action.type === actionTypes.CURRENT_WEATHER){
    return state.set('weatherData', action.weatherData)
  }
  if(action.type === actionTypes.FORECAST_WEATHER){
    console.log(action.forecast)
    return state.set('forecast', action.forecast)
  }
  return state
} 