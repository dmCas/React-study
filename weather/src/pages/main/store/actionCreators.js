// import axios from 'axios'
import { actionTypes } from './'

const cityApi = (city) => ({
  type: actionTypes.CURRENT_CITY,
  city
})

const weatherApi = (data) => ({
  type: actionTypes.CURRENT_WEATHER,
  weatherData: data
})

export const getCity = (city) => {
  return (dispatch) => {
    const action = cityApi(city)
    dispatch(action)
  }
}

export const getWeather = (data) => {
  return (dispatch) => {
    const action = weatherApi(data)
    dispatch(action)
  }
}