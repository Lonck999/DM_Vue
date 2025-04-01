import axios from 'axios'
import apiData from './index'

export default async function getTeamData(drName) {
  const data = await apiData.getAccessToken()
  const dataToken = data.Token
  const url = 'https://www.dltech.com.tw/DLWabAPI-Official/api/Official/DrDetail'
  const os = 'Web'
  const ver = '1'
  const headers = {
    token: dataToken,
    os: os,
    ver: ver,
  }
  try {
    const response = await axios.get(url, {
      headers: headers,
      params: {
        DrName: drName,
      },
    })
    return response.data
  } catch (error) {
    console.error('API 請求失敗:', error)
  }
}
