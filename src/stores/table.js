import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTableStore = defineStore('table', () => {
  const schedule = reactive({
    scheduleWeek: '門診時間/星期',
    scheduleMonCH: '星期一',
    scheduleMonEN: 'MON',
    scheduleTueCH: '星期二',
    scheduleTueEN: 'TUE',
    scheduleWedCH: '星期三',
    scheduleWedEN: 'WED',
    scheduleThuCH: '星期四',
    scheduleThuEN: 'THU',
    scheduleFriCH: '星期五',
    scheduleFriEN: 'FRI',
    scheduleSatCH: '星期六',
    scheduleSatEN: 'SAT',
    scheduleSunCH: '星期日',
    scheduleSunEN: 'SUN',
    scheduleMorning: '上午',
    scheduleMorningTime: '09:00-12:00',
    scheduleAfternoon: '下午',
    scheduleAfternoonTime: '13:00-16:00',
    scheduleEvening: '晚上',
    scheduleEveningTime: '18:30-21:30',
  })
  return { schedule }
})
