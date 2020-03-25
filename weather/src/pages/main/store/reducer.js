import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  city: '',
  cityHistory: [],
  weatherData: {}
})

export default (state = defaultState, action) => {
  if(action.type === actionTypes.CURRENT_CITY){
    return state.set('city', action.city)
  }
  if(action.type === actionTypes.CURRENT_WEATHER){
    return state.set('weatherData', action.weatherData)
  }
  return state
} 