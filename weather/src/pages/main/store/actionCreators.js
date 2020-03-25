// import axios from 'axios'
import { actionTypes } from './'

const weatherApi = (city) => ({
  type: actionTypes.CURRENT_CITY,
  city
})


export const getCity = (city) => {
  return (dispatch) => {
    const action = weatherApi(city)
    dispatch(action)
  }
}