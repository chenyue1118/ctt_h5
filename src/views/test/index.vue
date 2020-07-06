<template lang="html">
  <div class="test">
    <a @click="link">测试跳转</a>
    <div class="">
      <!-- <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
      /> -->
      <br />

      <input class="input" @focus="dateFocus" type="text" name="" value="">

      <!-- <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" /> -->
      <!-- 日期选择 -->
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="Select date"
          confirm-button-text="Confirm"
          cancel-button-text="Cancel"
          :min-date="minDate"
          @confirm="confirmDate"
          @cancel="cancelDate"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      minDate: new Date(),
      currentDate: new Date(),
      show: false
    }
  },
  methods: {
    link() {
      this.$router.push({
        path: '/query'
      })
    },
    dateFocus() {
      console.log('日期输入框光标聚集')
      this.show = true
    },
    cancelDate() {
      this.show = false
    },
    confirmDate(val) {
      console.log(val)
      console.log(window.moment(val).format('YYYY/MM/DD'))
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
.input {
  display: block;
  width: 99%;
  height: 42px;
}
</style>
