import axios from 'axios'
import apiData from './index'

export default {
  async getNowNumber() {
    const data = await apiData.getAccessToken()
    const dataToken = data.Token
    const url = 'https://www.dltech.com.tw/DLWabAPI-Official/api/Official/NumberInfo'
    const os = 'Web'
    const ver = '1'
    const headers = {
      token: dataToken,
      os: os,
      ver: ver,
    }
    try {
      const response = await axios.get(url, { headers })
      if (response.data.Success) {
        const nowNumber = response.data.Data
        return nowNumber
      } else {
        console.error('現場叫號請求失敗:', response.data.Cont)
        return null
      }
    } catch (error) {
      console.error('現場叫號請求失敗:', error)
      return null
    }
  },
}
