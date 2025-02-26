import axios from 'axios'

const url = 'https://www.dltech.com.tw/DLWabAPI-Official/api/Authoutication/AccessToken'

const getAccessToken = async () => {
  const params = {
    API_ID: 'DM',
    API_Secret: '08727379',
  }
  const headers = {
    Accept: 'application/json',
  }

  try {
    const response = await axios.get(url, { headers, params })
    if (response.data.Success) {
      // 假設 token 位於回應的第一筆資料的 Token 欄位
      return response.data.Data[0].Token
    } else {
      console.error('未能成功取得 Token:', response.data.Cont)
      return null
    }
  } catch (error) {
    console.error('請求失敗:', error)
    return null
  }
}

export default {
  getAccessToken,
}
