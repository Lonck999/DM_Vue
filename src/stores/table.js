import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTableStore = defineStore('table', () => {
  // 班表表格
  const schedule = reactive({
    week: '門診時間/星期',
    monCH: '星期一',
    monEN: 'MON',
    tueCH: '星期二',
    tueEN: 'TUE',
    wedCH: '星期三',
    wedEN: 'WED',
    thuCH: '星期四',
    thuEN: 'THU',
    friCH: '星期五',
    friEN: 'FRI',
    satCH: '星期六',
    satEN: 'SAT',
    sunCH: '星期日',
    sunEN: 'SUN',
    morning: '上午',
    morningTime: '09:00-12:00',
    afternoon: '下午',
    afternoonTime: '13:00-16:00',
    evening: '晚上',
    eveningTime: '18:30-21:30',
  })
  // 眼科門診
  const ophthalmology = reactive({
    title: '眼科門診',
    note: '視力保健、視力檢查、一般眼疾、近視雷射矯正、老花矯正、白內障超音波乳化治療、視網膜治療、飛蚊症雷射治療、青光眼治療、角膜塑型矯正等眼科手術。',
    doctorWang: '王司宏',
    doctorXu: '徐郁芳',
    doctorHuang: '黃瑞冰',
  })
  // 家醫科門診
  const familyMedicine = reactive({
    title: '家醫科門診',
    note1:
      '內科：感冒、腸胃炎、糖尿病、高血壓、高血脂、X光檢查、心電圖檢查、腹部超音波、胃鏡檢查、血液尿液檢查、骨質密度檢查、成人健康檢查。',
    note2: '外科：一般外傷處理、換藥、擦傷、刀傷、燙傷、甲溝炎。',
    doctorTsai: '蔡政達',
    doctorChang: '張淑境',
    doctorLin: '林昌錦',
    doctorShi: '史幸仙',
    doctorChu: '邱旭祥',
    doctorLee: '李明智',
  })
  // 復健科門診
  const rehabilitation = reactive({
    rehabilitationTitle: '復健科門診',
    rehabilitationNote1:
      '物理治療：冰凍肩(五十肩)、下背痛(腰痛)、坐骨神經痛、膝關節傷害、臏骨軟化症及其他膝蓋疼痛、腳踝扭傷等肌肉骨骼以及神經控制系統各種的不悅感或異常感。',
    rehabilitationNote2:
      '職能治療：成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。',
    rehabilitationDoctor: '林嘉勇',
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
    ophthalmology,
    familyMedicine,
    rehabilitation,
  }
})
