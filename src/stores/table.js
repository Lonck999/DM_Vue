import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTableStore = defineStore('table', () => {
  // 班表表格
  const schedule = reactive({
    sunCH: '星期日',
    sunEN: 'SUN',
    morning: '上午',
    afternoon: '下午',
    evening: '晚上',
  })
  // 復健科門診
  const rehabilitation = reactive({
    rehabilitationTimeTitle: '復健治療時間',
    rehabilitationMorning: '上午',
    rehabilitationMorningTime: '08:00-12:00',
    rehabilitationAfternoon: '下午',
    rehabilitationAfternoonTime: '14:00-21:00',
    rehabilitationLast: '復健治療最後收單時間 : ',
    rehabilitationLastTime: '11:30、20:30',
    rehabilitationNotice: '星期六至18:00 星期日至12:00',
    occupationTimeTitle: '職能治療時間',
    occupationChild: '兒童',
    occupationChildDay: '星期一至五',
    occupationChildTime: '13:00 - 21:00',
    occupationAldult: '成人',
    occupationAldultDay: '星期一至六',
    occupationAldultTime: '09:00 - 12:00',
  })
  return {
    schedule,
    rehabilitation,
  }
})
