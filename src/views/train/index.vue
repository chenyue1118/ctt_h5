<template lang="html">
  <div class="train-guide">
    <img class="content-bg" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1594208304&di=1937f444bda5da91f6cf6e2de6c26def&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg" />
    <div class="guide-content">
      <div class="content-title">Train ticket booking</div>
      <div class="content-guide">
        <div class="content-input">
          <a class="input-address" @click="selectAddress('start')">{{ homeSearch.start }}</a>
          <span class="input-line">-</span>
          <a class="input-address" @click="selectAddress('end')">{{ homeSearch.end }}</a>
        </div>
        <div class="content-input">
          <a class="input-timer" @click="selectTime">{{ homeSearch.time }}</a>
        </div>
        <div class="content-btn">
          <a class="input-btn" @click="linkQuery">Find</a>
        </div>
      </div>
    </div>
    <div class="guide-seize"></div>
    <van-popup v-model="dateShow" position="bottom">
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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'train-guide',
  computed: {
    ...mapGetters(['queryInfo']),
    homeSearch() {
      return {
        start: (this.queryInfo && this.queryInfo.start && this.queryInfo.start.pyC) || 'Start address',
        end: (this.queryInfo && this.queryInfo.end && this.queryInfo.end.pyC) || 'End address',
        time: (this.queryInfo && this.queryInfo.time) || 'Select time'
      }
    }
  },
  data() {
    return {
      dateShow: false,
      currentDate: new Date(),
      minDate: new Date(),
    }
  },
  methods: {
    ...mapMutations({
      set_queryinfo: 'SET_QUSRYINFO'
    }),
    // 日期确认
    confirmDate() {
      this.dateShow = false
      const query = this.queryInfo || {}
      query.time = window.moment(this.currentDate).format('YYYY-MM-DD')
      this.set_queryinfo(query)
    },
    cancelDate() {},
    selectTime() {
      this.dateShow = true
    },
    // 地址输入跳转
    selectAddress(type) {
      this.$router.push({
        path: `/address?type=${type}`
      })
    },
    linkQuery() {
      if (
        this.queryInfo &&
        this.queryInfo.start &&
        this.queryInfo.end &&
        this.queryInfo.time
      ) {
        this.$router.push({
          path: '/query'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.train-guide {
  width: 100%;
  height: 100%;
  background: #F6F6F6;
  .content-bg {
    display: block;
    width: 100%;
  }
  .guide-content {
    width: 96%;
    margin: 0 auto;
    margin-top: -30px;
    .content-title {
      display: inline-block;
      padding: 0 12px;
      height: 54px;
      line-height: 54px;
      font-size: 16px;
      color: #1A1A1A;
      background: #ffffff;
      border-radius: 6px 6px 0 0;
    }
    .content-guide {
      width: 100%;
      background: #fff;
      .content-input {
        display: flex;
        width: 96%;
        height: 66px;
        margin: 0 auto;
        border-bottom: 1px solid #F2F2F2;
        .input-address {
          flex: 1;
          height: 66px;
          line-height: 66px;
          font-size: 20px;
          color: #1A1A1A;
          text-align: center;
        }
        .input-line {
          flex: 0 0 20px;
          height: 66px;
          line-height: 66px;
          color: #333;
        }
        .input-timer {
          flex: 1;
          height: 66px;
          line-height: 66px;
          font-size: 20px;
          color: #1A1A1A;
        }
      }
      .content-btn {
        padding-top: 40px;
        padding-bottom: 20px;
        .input-btn {
          display: block;
          width: 96%;
          margin: 0 auto;
          height: 44px;
          line-height: 44px;
          background: #F12A3E;
          color: #fff;
          font-size: 18px;
          text-align: center;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
