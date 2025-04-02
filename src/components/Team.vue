<script setup>
import wangSiHong from '@/assets/img/wang-si-hong.jpg'
import huangRuiBing from '@/assets/img/huang-rui-bing.jpg'
import xuYuFang from '@/assets/img/xu-yu-fang.jpg'
import caiZhengDa from '@/assets/img/cai-zheng-da.jpg'
import lincCangJin from '@/assets/img/linc-cang-jin.jpg'
import shiXingShan from '@/assets/img/shi-xing-shan.jpg'
import qiuXuXiang from '@/assets/img/qiu-xu-xiang.jpg'
import zhangShuJing from '@/assets/img/zhang-shu-jing.jpg'
import liMingZhi from '@/assets/img/li-ming-zhi.jpg'
import linJiaYong from '@/assets/img/lin-jia-yong.jpg'
import getTeamData from '@/api/team'
import { ref, reactive, watch } from 'vue'
const title = ref('醫療團隊')
const team = reactive([
  {
    name: '王司宏',
    jobTitle: '院長',
    img: wangSiHong,
  },
  {
    name: '黃瑞冰',
    jobTitle: '醫師',
    img: huangRuiBing,
  },
  {
    name: '徐郁芳',
    jobTitle: '醫師',
    img: xuYuFang,
  },
  {
    name: '蔡正達',
    jobTitle: '醫師',
    img: caiZhengDa,
  },
  {
    name: '林昌錦',
    jobTitle: '醫師',
    img: lincCangJin,
  },
  {
    name: '史幸仙',
    jobTitle: '醫師',
    img: shiXingShan,
  },
  {
    name: '邱旭祥',
    jobTitle: '醫師',
    img: qiuXuXiang,
  },
  {
    name: '張淑境',
    jobTitle: '醫師',
    img: zhangShuJing,
  },
  {
    name: '李明智',
    jobTitle: '醫師',
    img: liMingZhi,
  },
  {
    name: '林嘉勇',
    jobTitle: '醫師',
    img: linJiaYong,
  },
])
const isShow = ref(false)
const drDetailData = ref({})
watch(isShow, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
const handleTeamClick = async (item) => {
  try {
    drDetailData.value = await getTeamData.getTeamData(item.name)
    isShow.value = true
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <section class="team">
    <h1>{{ title }}</h1>
    <div class="team-list">
      <div v-for="item in team" :key="item.name" class="team-item" @click="handleTeamClick(item)">
        <div class="team-item-img">
          <img :src="item.img" alt="team-img" />
        </div>
        <p>
          {{ item.name }} <span>{{ item.jobTitle }}</span>
        </p>
      </div>
    </div>
  </section>
  <teleport to="body" v-if="isShow && drDetailData">
    <div class="team-member-info">
      <p>{{ drDetailData.姓名 }}</p>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.team {
  width: min(100%, 192rem);
  height: 100%;
  background: $white-5;
  background-size: cover;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: $green-1;
    text-align: center;
    padding-top: 8rem;
  }
  .team-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 15rem;

    .team-item {
      width: 25%;
      text-align: center;
      font-size: 2.2rem;
      font-weight: 700;
      color: $green-1;
      margin-top: 5rem;

      &:hover img {
        transition: all 0.4s ease;
        transform: scale(1.07);
      }

      .team-item-img {
        width: 36rem;
        height: 36rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;

        img {
          width: 100%;
          object-fit: contain;
        }
      }

      p {
        width: 25%;
        margin: 0 auto;
        margin-top: 2rem;
        border-top: 1px solid $green-1;
        padding-top: 0.8rem;
      }
    }
  }
}

.team-member-info {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1000;
}
</style>
