<template lang="html">
  <div class="train-address">
    <div class="query-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <span class="back-text">Station selection</span>
        <van-icon class="back-icon back-icon-hide" name="arrow-left" />
      </div>
      <div class="header-info">
        <van-icon class="header-info-icon" name="search" />
        <input
          class="header-info-input"
          v-model="inputCity"
          @focus="handleFocus"
          @input="handleInput"
          placeholder="Please enter the city or station" />
      </div>
    </div>
    <div class="query-association">
      <div class="association-items">
        <div
          class="association-item"
          v-for="(item, index) in searchList"
          :key="index"
          @click="selectItem(item)">
          <span class="association-name">{{ item.pyC }}</span>
          <span class="association-name">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="query-history">
      <span class="history-title">histroy input：</span>
      <div class="history-infos"
        v-for="(item, index) in hisCity"
        :key="index"
        @click="selectItem(item)">
        <span class="history-info">{{ item.pyC }}</span>
      </div>
    </div>
    <div class="query-history">
      <span class="history-title">Hot City：</span>
      <div class="history-infos"
        v-for="(item, index) in hotCity"
        :key="index"
        @click="selectItem(item)">
        <span class="history-info">{{ item.pyC }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { stationAgg } from '@/assets/js/station.js'

export default {
  name: 'train-address',
  computed: {
    ...mapGetters(['queryInfo', 'hotCity', 'hisCity'])
  },
  data() {
    return {
      searchStatus: false,
      inputCity: '',
      inputItem: {},
      searchList: []
    }
  },
  methods: {
    ...mapMutations({
      set_queryinfo: 'SET_QUSRYINFO',
      set_hiscity: 'SET_HISCITY'
    }),
    // 返回上一页，并且数据存储
    goback() {
      if (this.inputItem && this.inputCity) {
        const query = this.queryInfo || {}
        const type = this.$route.query.type
        if (type && type === 'end') {
          query.end = this.inputItem
        } else {
          query.start = this.inputItem
        }
        this.set_queryinfo(query)
        const depCity = [...this.hisCity]
        depCity.push(this.inputItem)
        this.set_hiscity(depCity)
      }
      this.$router.go(-1)
    },
    handleFocus() {
      this.searchStatus = true
    },
    // 输入框光标输入
    handleInput() {
      if (this.inputCity && this.searchStatus) {
        const autoArr = []
        stationAgg.forEach(item => {
          if (
            item.py.indexOf(this.inputCity) > -1 ||
            item.pyC.indexOf(this.inputCity) > -1 ||
            item.name.indexOf(this.inputCity) > -1
          ) {
            autoArr.push(item)
          }
        })
        this.searchList = [...autoArr]
        if (this.searchList && this.searchList.length > 10) this.searchList.length = 10
      } else {
        this.searchList.length = 0
      }
    },
    // 选中
    selectItem(item) {
      this.searchStatus = false
      this.searchList.length = 0
      this.inputCity = item.pyC
      this.inputItem = item
    }
  }
}
</script>

<style lang="less" scoped>
.train-address {
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
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #FFFFFF;
      }
    }
    .header-info {
      width: 100%;
      height: 30px;
      padding: 0 10px;
      background: #FAFAFA;
      border-radius: 4px;
      display: flex;
      overflow: hidden;
      .header-info-icon {
        flex: 0 0 30px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
      }
      .header-info-input {
        flex: 1;
        display: block;
        height: 30px;
        line-height: 16px;
        padding: 7px 0;
        border: none;
        background: #FAFAFA;
        font-size: 12px;
        color: #333;
      }
    }
  }
  .query-association {
    position: relative;
    .association-items {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      padding: 4px 18px;
      background: #fff;
      box-shadow: 3px 6px 13px 0 #d2d2d2;
      .association-item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d2d2d2;
        .association-name {
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #333;
        }
      }
    }
  }
  .query-history {
    padding: 18px 18px 0 18px;
    .history-title {
      display: block;
      height: 30px;
      font-size: 15px;
      color: #333333;
    }
    .history-infos {
      display: inline-block;
      padding-right: 14px;
      padding-bottom: 12px;
      .history-info {
        display: inline-block;
        height: 30px;
        padding: 8px 14px;
        line-height: 14px;
        background: #F2F2F4;
        color: #333;
        border-radius: 4px;
      }
    }
  }
}
</style>
