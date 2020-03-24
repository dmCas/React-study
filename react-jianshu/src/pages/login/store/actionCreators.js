import axios from 'axios'
import {constants} from '../store'


const changeLogin= () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+ account + '&password=' + password).then(
      (res) => {
       const result = res.data.data
       if (result) {
        dispatch(changeLogin())
       }else{
         alert('登录失败')
       }
      }
    )
  }
}

export const login_off = () => {
  return (dispatch) => {
    const action = {
      type: constants.LOG_OFF,
      value: false
    }
    dispatch(action)
  }
}