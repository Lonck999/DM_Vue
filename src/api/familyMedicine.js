import axios from 'axios'
import apiData from './index'

export default {
  async getFamilyMedicineList() {
    const data = await apiData.getAccessToken()
    const dataToken = data.Token
    const url = 'https://www.dltech.com.tw/DLWabAPI-Official/api/Official/TableInfo'
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
        return response.data.Data[1]
      } else {
        console.error('家醫科列表請求失敗:', response.data.Cont)
        return null
      }
    } catch (error) {
      console.error('家醫科列表請求失敗:', error)
      return null
    }
  },
}
