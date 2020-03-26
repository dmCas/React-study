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

const forecastApi = (data) => ({
  type: actionTypes.FORECAST_WEATHER,
  forecast: data
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

export const getForecast = (data) => {
  return (dispatch) => {
    const action = forecastApi(data)
    dispatch(action)
  }
}