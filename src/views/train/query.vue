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
        <div class="header-info-timer" @click="selectTime">
          <span class="timer-txt">{{ queryInfo.time }}</span>
          <i class="time-icon"></i>
        </div>
        <span class="header-info-up">After</span>
      </div>
    </div>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      loading-text="Loading...">
      <div class="query-result">
        <div class="result-items">
          <div
            class="result-item"
            v-for="(item, index) in resultList"
            :key="index"
            @click="linkBook">
            <div class="item-detail">
              <div class="detail-number">G507{{item}}</div>
              <div class="detail-address">
                <span class="address-name">Beijing</span>
                <span class="address-time">05:30AM</span>
              </div>
              <div class="address-diachronic">
                <div class="diachronic-dec">
                  <span class="diachronic-time">1H7M</span>
                  <div class="diachronic-lines">
                    <span class="lines-oc"></span>
                    <span class="lines-ll"></span>
                    <span class="lines-oc"></span>
                  </div>
                </div>
              </div>
              <div class="detail-address">
                <span class="address-name">Pyongyang</span>
                <span class="address-time">09:37AM</span>
              </div>
            </div>
            <div class="item-ticket">
              <div class="ticket-types">
                <span class="types-name">1st Class:</span>
                <span class="type-has">Yes</span>
              </div>
              <div class="ticket-types ticket-types-no">
                <span class="types-name">2st Class:</span>
                <span class="type-has">0</span>
              </div>
              <div class="ticket-types ticket-types-no">
                <span class="types-name">3st Class:</span>
                <span class="type-has">0</span>
              </div>
            </div>
          </div>
          <div class="result-item">
            <div class="item-detail">
              <div class="detail-number">G507</div>
              <div class="detail-address">
                <span class="address-name">Beijing</span>
                <span class="address-time">05:30AM</span>
              </div>
              <div class="address-diachronic">
                <div class="diachronic-dec">
                  <span class="diachronic-time">1H7M</span>
                  <div class="diachronic-lines">
                    <span class="lines-oc"></span>
                    <span class="lines-ll"></span>
                    <span class="lines-oc"></span>
                  </div>
                </div>
              </div>
              <div class="detail-address">
                <span class="address-name">Pyongyang</span>
                <span class="address-time">09:37AM</span>
              </div>
            </div>
            <div class="item-ticket">
              <div class="ticket-types">
                <span class="types-name">1st Class:</span>
                <span class="type-has">Yes</span>
              </div>
              <div class="ticket-types ticket-types-no">
                <span class="types-name">1st Class:</span>
                <span class="type-has">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <!-- <div class="query-result">
      <div class="result-items">
        <div class="result-item" v-for="(item, index) in resultList" :key="index">
          <div class="item-detail">
            <div class="detail-number">G507{{item}}</div>
            <div class="detail-address">
              <span class="address-name">Beijing</span>
              <span class="address-time">05:30AM</span>
            </div>
            <div class="address-diachronic">
              <div class="diachronic-dec">
                <span class="diachronic-time">1H7M</span>
                <div class="diachronic-lines">
                  <span class="lines-oc"></span>
                  <span class="lines-ll"></span>
                  <span class="lines-oc"></span>
                </div>
              </div>
            </div>
            <div class="detail-address">
              <span class="address-name">Pyongyang</span>
              <span class="address-time">09:37AM</span>
            </div>
          </div>
          <div class="item-ticket">
            <div class="ticket-types">
              <span class="types-name">1st Class:</span>
              <span class="type-has">Yes</span>
            </div>
            <div class="ticket-types ticket-types-no">
              <span class="types-name">2st Class:</span>
              <span class="type-has">0</span>
            </div>
            <div class="ticket-types ticket-types-no">
              <span class="types-name">3st Class:</span>
              <span class="type-has">0</span>
            </div>
          </div>
        </div>
        <div class="result-item">
          <div class="item-detail">
            <div class="detail-number">G507</div>
            <div class="detail-address">
              <span class="address-name">Beijing</span>
              <span class="address-time">05:30AM</span>
            </div>
            <div class="address-diachronic">
              <div class="diachronic-dec">
                <span class="diachronic-time">1H7M</span>
                <div class="diachronic-lines">
                  <span class="lines-oc"></span>
                  <span class="lines-ll"></span>
                  <span class="lines-oc"></span>
                </div>
              </div>
            </div>
            <div class="detail-address">
              <span class="address-name">Pyongyang</span>
              <span class="address-time">09:37AM</span>
            </div>
          </div>
          <div class="item-ticket">
            <div class="ticket-types">
              <span class="types-name">1st Class:</span>
              <span class="type-has">Yes</span>
            </div>
            <div class="ticket-types ticket-types-no">
              <span class="types-name">1st Class:</span>
              <span class="type-has">0</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="query-noresult">
      <div class="noresult-content">
        <i class="noresult-icon"></i>
        <span class="noresult-title">Search No Results</span>
        <span class="noresult-desc">The train is not daily operation,<br /> please select another date.</span>
      </div>
    </div>
    <div class="query-screen" v-if="!dateShow">
      <div class="screen-items">
        <div class="screen-criteria">
          <span class="criteria-name">Earliest</span>
          <span class="criteria-icon"></span>
        </div>
        <div class="screen-criteria screen-criteria-active">
          <span class="criteria-name">Time Consuming</span>
          <span class="criteria-icon"></span>
        </div>
        <div class="screen-criteria">
          <span class="criteria-name" @click="setFilter(1)">Filter</span>
        </div>
        <div class="screen-criteria">
          <span class="criteria-name">Show Fare</span>
        </div>
      </div>
    </div>
    <div class="query-filter" :class="{ 'query-filter-show': filterStatus }">
      <div class="filter-container">
        <div class="filter-manage">
          <span class="filter-manage-btn" @click="setFilter(2)">Cancel</span>
          <span class="filter-manage-btn">Filter</span>
          <span class="filter-manage-btn filter-manage-btn-active" @click="setFilter(2)">Confirm</span>
        </div>
        <div class="filter-condition">
          <div class="condition-types">
            <div class="types-header">
              <span class="types-line"></span>
              <span class="types-name">Model Selection</span>
              <span class="types-line"></span>
            </div>
            <van-checkbox-group class="types-content" v-model="selectionList">
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="1">High-speed rail</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="2">Motor train</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="3">Ordinary(Z/T/K)</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="4">Others(L/Y More)</van-checkbox>
              </div>
            </van-checkbox-group>
          </div>
          <div class="condition-types">
            <div class="types-header">
              <span class="types-line"></span>
              <span class="types-name">Departure Time</span>
              <span class="types-line"></span>
            </div>
            <van-checkbox-group class="types-content" v-model="timeList">
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="1">00:00-06:00</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="2">06:00-12:00</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="3">12:00-18:00</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="4">18:00-24:00</van-checkbox>
              </div>
            </van-checkbox-group>
          </div>
          <div class="condition-types">
            <div class="types-header">
              <span class="types-line"></span>
              <span class="types-name">Departure Station</span>
              <span class="types-line"></span>
            </div>
            <van-checkbox-group class="types-content" v-model="departureList">
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="1">Beijing West</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="2">Beijing</van-checkbox>
              </div>
            </van-checkbox-group>
          </div>
          <div class="condition-types">
            <div class="types-header">
              <span class="types-line"></span>
              <span class="types-name">Arriving Station</span>
              <span class="types-line"></span>
            </div>
            <van-checkbox-group class="types-content" v-model="arrivingList">
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="1">Anyang West</van-checkbox>
              </div>
              <div class="types-checkitem">
                <van-checkbox shape="square" checked-color="#1F97BA" name="2">Anyang</van-checkbox>
              </div>
            </van-checkbox-group>
          </div>
        </div>
      </div>
    </div>
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
import { mapGetters } from 'vuex'

export default {
  name: 'train-query',
  computed: {
    ...mapGetters(['queryInfo']),
  },
  data() {
    return {
      // 时间
      dateShow: false,
      currentDate: new Date(),
      minDate: new Date(),
      // 下拉刷新状态
      isLoading: false,
      // 搜索的火车票列表result
      resultList: [1, 2, 3, 4, 5, 6, 7, 8],
      // 条件过滤
      filterStatus: false,
      // 火车票类型
      selectionList: [],
      timeList: [],
      departureList: [],
      arrivingList: [],
    }
  },
  methods: {
    // 日期确认
    confirmDate() {
      this.dateShow = false
      // const query = this.queryInfo || {}
      // query.time = window.moment(this.currentDate).format('YYYY-MM-DD')
      // this.set_queryinfo(query)
    },
    cancelDate() {},
    // 设置时间
    selectTime() {
      this.dateShow = true
    },
    goback() {
      this.$router.go(-1)
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    // 跳转订单确认页面
    linkBook() {
      this.$router.push({
        path: '/confirmation'
      })
    },
    // 设置过滤状态
    setFilter(type) {
      this.filterStatus = type === 1
    }
  }
}
</script>

<style lang="less" scoped>
// @import '@/style/query-header.less'
.train-query {
  padding-top: 102px;
  height: 100%;
  background: #F6F6F6;
  .query-header {
    position: fixed;
    top: 0;
    z-index: 99;
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
        font-size: 20px;
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
  .query-result {
    // display: none;
    padding-bottom: 50px;
    .result-items {
      padding: 10px 0;
      .result-item {
        padding: 20px 14px 2px 14px;
        .item-detail {
          padding-bottom: 20px;
          border-bottom: 1px dashed #DCDCDC;
          display: flex;
          justify-content: space-between;
          .detail-number {
            display: flex;
            align-items: center;
            font-size: 17px;
            color: #333333;
            font-weight: 700;
          }
          .detail-address {
            .address-name {
              display: block;
              line-height: 1;
              font-size: 15px;
              color: #333333;
              font-weight: 400;
            }
            .address-time {
              display: block;
              padding-top: 10px;
              font-size: 13px;
              color: #1F97BA;
            }
          }
          .address-diachronic {
            display: flex;
            align-items: center;
            justify-content: center;
            .diachronic-dec {}
            .diachronic-time {
              display: block;
              height: 15px;
              line-height: 15px;
              font-size: #999999;
              font-size: 12px;
              text-align: center;
            }
            .diachronic-lines {
              font-size: 0;
              .lines-oc {
                display: inline-block;
                height: 5px;
                width: 5px;
                border-radius: 50%;
                background: #FEDCDC;
                vertical-align: top;
              }
              .lines-ll {
                display: inline-block;
                width: 66px;
                height: 1px;
                background: #FEDCDC;
                transform: translateY(2px);
              }
            }
          }
        }
        .item-ticket {
          padding-top: 10px;
          font-size: 0;
          .ticket-types {
            display: inline-block;
            width: 50%;
            padding-bottom: 8px;
            font-size: 12px;
            .types-name {
              color: #333333;
            }
            .type-has {
              color: #F1951E;
            }
          }
          .ticket-types-no {
            .types-name, .type-has {
              color: #999999;
            }
          }
        }
      }
    }
  }
  .query-noresult {
    display: none;
    width: 100%;
    height: 100%;
    padding-top: 30%;
    .noresult-content {
      .noresult-icon {
        display: block;
        width: 130px;
        height: 138px;
        margin: 0 auto;
        background: url(./../../assets/image/icon-result-no.png) no-repeat center;
        background-size: 100%;
      }
      .noresult-title {
        display: block;
        padding: 22px 0 10px 0;
        text-align: center;
        font-size: 15px;
        color: #999999;
      }
      .noresult-desc {
        display: block;
        line-height: 14px;
        text-align: center;
        font-size: 13px;
        color: #999999;
      }
    }
  }
  .query-screen {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    .screen-items {
      width: 100%;
      height: 50px;
      padding: 0 14px;
      background: rgba(1, 24, 72, 0.8);
      display: flex;
      justify-content: space-between;
      .screen-criteria {
        padding: 16px 0;
        .criteria-name {
          display: inline-block;
          line-height: 18px;
          padding-right: 2px;
          font-size: 14px;
          color: #FFFFFF;
        }
        .criteria-icon {
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url(./../../assets/image/icon-sreen-dwon.png) no-repeat center;
          background-size: 70%;
          vertical-align: top;
        }
      }
      .screen-criteria-active {
        .criteria-name {
          color: #1F97BA;
        }
        .criteria-icon {
          background: url(./../../assets/image/icon-sreen-dwon-active.png) no-repeat center;
          background-size: 70%;
        }
      }
    }
  }
  .query-filter {
    .filter-container {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 99999;
      background: #fff;
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: all 0.5s;
      .filter-manage {
        padding: 10px 14px;
        height: 40px;
        background: #011848;
        display: flex;
        justify-content: space-between;
        .filter-manage-btn {
          line-height: 20px;
          color: #FFFFFF;
          font-size: 14px;
        }
        .filter-manage-btn-active {
          color: #1F97BA;
        }
      }
      .filter-condition {
        padding: 20px 18px;
        .condition-types {
          padding-top: 10px;
          .types-header {
            display: flex;
            margin-bottom: 28px;
            .types-line {
              flex: 0 0 32%;
              height: 1px;
              background: #DCDCDC;
              transform: translateY(5px);
            }
            .types-name {
              flex: 1;
              font-size: 12px;
              color: #999999;
              text-align: center;
            }
          }
          .types-content {
            .types-checkitem {
              display: inline-block;
              width: 50%;
              padding-bottom: 18px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .query-filter-show {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.2);
    .filter-container {
      height: 512px;
    }
  }
}
</style>
