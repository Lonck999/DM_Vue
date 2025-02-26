import axios from 'axios'

export default {
  async getAccessToken() {
    const url = 'https://www.dltech.com.tw/DLWabAPI-Official/api/Authoutication/AccessToken'
    const params = {
      API_ID: 'DM',
      API_Secret: '08727379',
    }

    try {
      const response = await axios.get(url, { params })
      if (response.data.Success) {
        const date = response.data.Data[0]
        return date
      } else {
        console.error('未能成功取得 Token:', response.data.Cont)
        return null
      }
    } catch (error) {
      console.error('請求失敗:', error)
      return null
    }
  },
}
