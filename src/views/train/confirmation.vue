<template lang="html">
  <div class="train-confirmation">
    <div class="confirmation-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <div class="back-text">Confirmation Details</div>
        <van-icon class="back-icon back-icon-hide" name="arrow-left" />
      </div>
      <div class="header-info">
        <span class="header-info-up"></span>
        <div class="header-info-timer">
          <span class="timer-txt">2020-07-11</span>
          <i class="time-icon"></i>
        </div>
        <span class="header-info-up"></span>
      </div>
    </div>
    <div class="confirmation-content">
      <div class="confirmation-result">
        <div class="result-address">
          <span class="address-name">Beijing</span>
          <span class="address-time">05:30AM</span>
          <span class="address-date">2020-07-07</span>
        </div>
        <div class="result-types">
          <div class="result-types-container">
            <span class="types-number">G507</span>
            <div class="types-lines">
              <span class="lines-oc"></span>
              <span class="lines-ll"></span>
              <span class="lines-oc"></span>
            </div>
            <span class="types-time">4H7M</span>
          </div>
        </div>
        <div class="result-address">
          <span class="address-name">Shangahi</span>
          <span class="address-time">05:30AM</span>
          <span class="address-date">2020-07-07</span>
        </div>
      </div>
      <div class="confirmation-book">
        <div class="book-items">
          <span class="book-seat">1st Class</span>
          <span class="book-price">USD124.6</span>
          <span class="book-status">Yes</span>
          <span class="book-btn">Book</span>
        </div>
        <div class="book-items">
          <span class="book-seat">2st Class</span>
          <span class="book-price">USD124.6</span>
          <span class="book-status">Yes</span>
          <span class="book-btn">Book</span>
        </div>
        <div class="book-items book-items-no">
          <span class="book-seat">Deluxe Soft Sleeper</span>
          <span class="book-price">USD124.6</span>
          <span class="book-status">No</span>
          <span class="book-btn">Book</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirmation',
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.train-confirmation {
  padding-top: 102px;
  height: 100%;
  background: #F6F6F6;
  .confirmation-header {
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
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #FFFFFF;
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
  .confirmation-content {
    padding: 22px 14px;
    .confirmation-result {
      display: flex;
      justify-content: space-between;
      padding-bottom: 22px;
      .result-address {
        .address-name {
          display: block;
          font-size: 15px;
          color: #333333;
        }
        .address-time {
          display: block;
          padding: 8px 0 2px 0;
          line-height: 1;
          font-size: 20px;
          color: #333333;
          font-weight: 600;
        }
        .address-date {
          display: block;
          font-size: 14px;
          color: #999999;
        }
      }
      .result-types {
        display: flex;
        align-items: center;
        .result-types-container {
          .types-number {
            display: block;
            text-align: center;
            font-size: 14px;
            color: #333333;
          }
          .types-lines {
            padding-top: 2px;
            padding-bottom: 4px;
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
          .types-time {
            display: block;
            text-align: center;
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
    .confirmation-book {
      padding-top: 20px;
      .book-items {
        display: flex;
        justify-content: space-between;
        padding-bottom: 19px;
        .book-seat {
          flex: 0 0 40%;
          line-height: 32px;
          font-size: 15px;
          color: #333333;
        }
        .book-status {
          line-height: 32px;
          font-size: 15px;
          color: #333333;
        }
        .book-price {
          line-height: 32px;
          font-size: 12px;
          color: #1F97BA;
        }
        .book-btn {
          height: 32px;
          line-height: 32px;
          padding: 0 18px;
          background: #1F97BA;
          border-radius: 4px;
          font-size: 13px;
          color: #FFFFFF;
        }
      }
      .book-items-no {
        .book-status {
          color: #C8C9CC;
        }
        .book-btn {
          background: #C8C9CC;
        }
      }
    }
  }
}
</style>
