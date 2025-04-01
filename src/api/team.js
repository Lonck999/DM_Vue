import axios from 'axios'
import apiData from './index'

export default async function getTeamData(drName) {
  const data = await apiData.getAccessToken()
  const dataToken = data.Token
  try {
    const response = await axios.get(
      'https://www.dltech.com.tw/DLWabAPI-Official/api/Official/DrDetail',
      {
        headers: {
          token: dataToken,
          os: 'web',
          ver: '1',
        },
        params: {
          DrName: drName,
        },
      },
    )
    return response.data
  } catch (error) {
    console.error('API 請求失敗:', error)
  }
}
