import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useTableStore = defineStore('table', () => {
  // 班表表格
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
  // 眼科門診
  const ophthalmology = reactive({
    title: '眼科門診',
    note: '視力保健、視力檢查、一般眼疾、近視雷射矯正、老花矯正、白內障超音波乳化治療、視網膜治療、飛蚊症雷射治療、青光眼治療、角膜塑型矯正等眼科手術。',
  })
  // 眼科醫師
  const ophthalmologyDoctor = reactive({
    wang: '王司宏',
    xu: '徐郁芳',
    huang: '黃瑞冰',
  })
  // 復健科門診
  const rehabilitation = reactive({
    rehabilitationTitle: '復健科門診',
    rehabilitationNote1:
      '物理治療：冰凍肩(五十肩)、下背痛(腰痛)、坐骨神經痛、膝關節傷害、臏骨軟化症及其他膝蓋疼痛、腳踝扭傷等肌肉骨骼以及神經控制系統各種的不悅感或異常感。',
    rehabilitationNote2:
      '職能治療：成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。',
  })
  // 復健科醫師
  const rehabilitationDoctor = ref('林嘉勇')
  // 復健治療時間
  const rehabilitationTime = reactive({
    rehabilitationTimeTitle: '復健治療時間',
    rehabilitationMorning: '上午',
    rehabilitationMorningTime: '08:00-12:00',
    rehabilitationAfternoon: '下午',
    rehabilitationAfternoonTime: '14:00-21:00',
    rehabilitationLast: '復健治療最後收單時間 : ',
    rehabilitationLastTime: '11:30、20:30',
    rehabilitationNotice: '星期六至18:00 星期日至12:00',
  })
  // 職能治療時間
  const occupationTime = reactive({
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
    ophthalmology,
    ophthalmologyDoctor,
    rehabilitation,
    rehabilitationDoctor,
    rehabilitationTime,
    occupationTime,
  }
})
