<template lang="html">
  <div class="train-query">
    <div class="query-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <div class="back-text">
          <span class="back-text-address">{{ queryInfo.start.pyC }}</span>
          <i class="back-text-icon"></i>
          <span class="back-text-address">{{ queryInfo.end.pyC }}</span>
        </div>
        <van-icon class="back-icon back-icon-hide" name="arrow-left" />
      </div>
      <div class="header-info">
        <span class="header-info-up">Before</span>
        <div class="header-info-timer">
          <span class="timer-txt">{{ queryInfo.time }}</span>
          <i class="time-icon"></i>
        </div>
        <span class="header-info-up">After</span>
      </div>
    </div>
    <div class="query-result">
      <div class="result-items">
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'train-query',
  computed: {
    ...mapGetters(['queryInfo']),
  },
  data() {
    return {
      inputCity: ''
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
// @import '@/style/query-header.less'
.train-query {
  height: 100%;
  background: #F6F6F6;
  .query-header {
    width: 100%;
    padding: 8px 12px;
    background: #F12A3E;
    .header-back {
      display: flex;
      padding: 8px 0;
      .back-icon {
        flex: 0 0 40px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 24px;
      }
      .back-icon-hide {
        opacity: 0;
      }
      .back-text {
        flex: 1;
        display: block;
        height: 40px;
        // line-height: 40px;
        // text-align: center;
        // font-size: 18px;
        // color: #FFFFFF;
        display: flex;
        .back-text-address {
          flex: 1;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          color: #FFFFFF;
        }
        .back-text-icon {
          flex: 0 0 40px;
          width: 20px;
          height: 40px;
          background: url(../../assets/image/icon-arrive.png) no-repeat center;
          background-size: 20px 20px;
        }
      }
    }
    .header-info {
      width: 100%;
      height: 30px;
      // padding: 0 10px;
      display: flex;
      overflow: hidden;
      .header-info-up {
        flex: 0 0 52px;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #fff;
        text-align: center;
      }
      .header-info-timer {
        flex: 1;
        height: 30px;
        font-size: 0;
        text-align: center;
        border-radius: 50px;
        background: #E22437;
        .timer-txt {
          display: inline-block;
          width: 50%;
          height: 30px;
          line-height: 30px;
          color: #FFFFFF;
          font-size: 14px;
        }
        .time-icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url(../../assets/image/icon-date.png) no-repeat center;
          background-size: 18px 18px;
          vertical-align: top;
        }
      }
    }
  }
}
</style>
