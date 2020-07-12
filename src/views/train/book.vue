<template lang="html">
  <div class="train-book">
    <div class="book-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <div class="back-text">Confirmation Details</div>
        <van-icon class="back-icon back-icon-hide" name="arrow-left" />
      </div>
      <div class="header-info"></div>
    </div>
    <div class="book-content">
      <div class="book-content-container">
        <div class="book-content-result">
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
        <div class="book-content-types">
          <span class="types-seat">2nd Class</span>
          <span class="types-price">USD124.6</span>
        </div>
      </div>
      <div class="book-adds-container">
        <div class="adds-passenger-info">
          <div class="passenger-info-items" v-for="(item, index) in passengerInfos" :key="index">
            <div class="items-passenger">
              <div class="passenger-detail">
                <span class="detail-name">HADME LANET LINGYNH{{ item }}</span>
                <span class="detail-type">Adult</span>
              </div>
              <div class="passenger-detail">
                <span class="detail-id">Passport</span>
                <span class="detail-number">410**********021</span>
                <span class="detail-country">United States</span>
              </div>
            </div>
            <i class="items-delete"></i>
          </div>
        </div>
        <div class="book-content-adds">
          <span class="adds-passenger" @click="linkTo('/add-adult')">Add adult</span>
          <span class="adds-passenger" @click="linkTo('/add-child')">Add child</span>
        </div>
      </div>
      <div class="book-content-express">
        <!-- book-content-express-no -->
        <div class="express-ticket" @click="showExpress">
          <div class="ticket-express-icon">
            <i class="express-icon"></i>
          </div>
          <div class="ticket-coll">
            <span class="coll-name">Express ticket collection</span>
            <span class="coll-desc">Can be delivered to a designated location without the need for a station to queue for tickets.</span>
          </div>
          <van-icon v-if="expressStatus" class="ticket-express-select" name="arrow-up" />
          <van-icon v-else class="ticket-express-select" name="arrow-down" />
        </div>
        <div class="express-adress-wrapper" :class="{ 'express-adress-hide': !expressStatus }">
          <div class="express-adress" @click="linkTo('/hotel-address')">
            <span class="adress-name">Deliver to my China hotel</span>
            <span class="adress-icon">></span>
          </div>
          <div class="express-adress" @click="linkTo('/personal-address')">
            <span class="adress-name">Deliver to a personal address in China</span>
            <span class="adress-icon">></span>
          </div>
        </div>
      </div>
      <div class="book-content-notexpress">
        <i class="notexpress-icon"></i>
        <span class="notexpress-txt">Cannot use express delivery ticket after booking 72 hours ago.</span>
      </div>
      <div class="book-content-agreed">
        Click on book to indicate that you have read and<br /> agreed
        <span class="agreed-conditions" @click="linkTo('/help')">terms and conditions.</span>
      </div>
    </div>
    <div class="book-infos">
      <div class="book-info" :class="{ 'book-info-hide': !orderPriceStatus }">
        <div class="info-items">
          <div class="item-types">
            Adult train tickets x <span>2</span>
          </div>
          <span class="item-price">USD141</span>
        </div>
        <div class="info-items">
          <div class="item-types">
            Service Fee x <span>2</span>
          </div>
          <span class="item-price">USD2</span>
        </div>
        <div class="info-items">
          <div class="item-types">
            Courier fee <span>2</span>
          </div>
          <span class="item-price">USD2</span>
        </div>
        <div class="info-items">
          <div class="item-types">
            Adult train tickets x <span>2</span>
          </div>
          <span class="item-price">USD141</span>
        </div>
      </div>
      <div class="book-confirm">
        <div class="confirm-total">
          <span class="total">Total order</span>
          <span class="price" @click="showOrderPrice">USD279.2</span>
          <van-icon v-if="orderPriceStatus" class="up-icon" name="arrow-up" />
          <van-icon v-else class="up-icon" name="arrow-down" />
        </div>
        <span class="confirm-btn">Book</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'train-book',
  data() {
    return {
      // 快递票选择展示状态
      expressStatus: false,
      // 车票价格展示状态
      orderPriceStatus: false,
      passengerInfos: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    // 跳转
    linkTo(path) {
      this.$router.push({ path })
    },
    // 快递票选择邮寄展示
    showExpress() {
      this.expressStatus = !this.expressStatus
    },
    // 订单价格展示
    showOrderPrice() {
      this.orderPriceStatus = !this.orderPriceStatus
    }
  }
}
</script>

<style lang="less" scoped>
.train-book {
  padding-top: 102px;
  height: 100%;
  background: #F6F6F6;
  .book-header {
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
    }
  }
  .book-content {
    position: relative;
    z-index: 999999;
    width: 100%;
    padding: 0 12px;
    .book-content-container {
      width: 100%;
      margin-top: -44px;
      padding: 22px 16px 18px 16px;
      background: #fff;
      box-shadow: 0px 1px 6px 0px rgba(161, 160, 160, 0.2);
      border-radius: 8px;
      .book-content-result {
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
      .book-content-types {
        .types-seat {
          padding-right: 30px;
          font-size: 14px;
          color: #333333;
        }
        .types-price {
          padding-right: 30px;
          font-size: 14px;
          color: #1F97BA;
        }
      }
    }
    .book-adds-container {
      margin-top: 12px;
      padding: 8px 16px;
      background: #fff;
      box-shadow: 0px 1px 6px 0px rgba(161, 160, 160, 0.2);
      border-radius: 8px;
      .adds-passenger-info {
        width: 100%;
        padding-bottom: 10px;
        .passenger-info-items {
          padding: 15px 0;
          border-bottom: 1px solid #DCDCDC;
          display: flex;
          .items-passenger {
            flex: 1;
            .passenger-detail {
              .detail-name {
                padding-right: 8px;
                line-height: 14px;
                font-size: 14px;
                color: #333333;
              }
              .detail-type {
                display: inline-block;
                height: 16px;
                line-height: 14px;
                padding: 0 4px;
                border: 1px solid #1F97BA;
                border-radius: 4px;
                font-size: 10px;
              }
              .detail-id {
                font-size: 13px;
                color: #1F97BA;
              }
              .detail-number {
                padding-left: 8px;
                font-size: 13px;
                color: #000018;
              }
              .detail-country {
                padding-left: 15px;
                font-size: 13px;
                color: #000018;
              }
            }
            .passenger-detail + .passenger-detail {
              padding-top: 10px;
            }
          }
          .items-delete {
            flex: 0 0 20px;
            width: 20px;
            height: 20px;
            background: url(../../assets/image/icon-passenger-delete.png) no-repeat center;
            background-size: 16px 16px;
          }
        }
      }
      .book-content-adds {
        display: flex;
        .adds-passenger {
          flex: 1;
          height: 26px;
          line-height: 26px;
          font-size: 15px;
          color: #1F97BA;
          text-align: center;
        }
        .adds-passenger + .adds-passenger {
          border-left: 1px solid #DCDCDC;
        }
      }
    }
    .book-content-express {
      margin-top: 12px;
      padding: 12px 16px 5px 16px;
      background: #fff;
      box-shadow: 0px 1px 6px 0px rgba(161, 160, 160, 0.2);
      border-radius: 8px;
      .express-ticket {
        display: flex;
        .ticket-express-icon {
          flex: 0 0 22px;
          display: flex;
          align-items: center;
          .express-icon {
            display: block;
            width: 22px;
            height: 22px;
            background-color: #1F97BA;
            border-radius: 50%;
          }
        }
        .ticket-coll {
          flex: 1;
          padding: 2px 20px 10px 7px;
          .coll-name {
            display: block;
            padding-bottom: 6px;
            color: #333333;
            font-size: 15px;
            font-weight: 600;
          }
          .coll-desc {
            display: block;
            font-size: 12px;
            color: #999999;
            line-height: 16px;
          }
        }
        .ticket-express-select {
          flex: 0 0 24px;
          line-height: 30px;
          font-size: 24px;
          color: #999999;
        }
      }
      .express-adress-wrapper {
        height: 78px;
        transition: all 0.3s;
        overflow: hidden;
        .express-adress {
          display: flex;
          justify-content: space-between;
          .adress-name {
            line-height: 39px;
            font-size: 13px;
            color: #333333;
            font-weight: 550;
          }
          .adress-icon {
            line-height: 39px;
            font-size: 14px;
            color: #999999;
          }
        }
      }
      .express-adress-hide {
        height: 0;
      }
    }
    .book-content-express-no {
      opacity: 0.4;
    }
    .book-content-notexpress {
      padding: 10px 16px 2px 16px;
      font-size: 0;
      .notexpress-icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(./../../assets/image/icon-express-trip.png) no-repeat center;
        background-size: 16px 18px;
        vertical-align: top;
      }
      .notexpress-txt {
        display: inline-block;
        width: 90%;
        padding-left: 12px;
        font-size: 13px;
        color: #F1951E;
        line-height: 16px;
      }
    }
    .book-content-agreed {
      padding: 10px;
      line-height: 18px;
      text-align: center;
      color: #666666;
      font-size: 12px;
      .agreed-conditions {
        color: #1F97BA;
      }
    }
  }
  .book-infos {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999999;
    width: 100%;
    // padding: 0 28px;
    box-shadow: 0px 1px 6px 0px rgba(161, 160, 160, 0.2);
    background: #fff;
    .book-info {
      height: 133px;
      padding: 6px 28px;
      border-bottom: 1px solid #DCDCDC;
      overflow: hidden;
      transition: all 0.3s;
      .info-items {
        display: flex;
        .item-types {
          flex: 1;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #333333;
        }
        .item-price {
          flex: 0 0 66px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #1F97BA;
        }
      }
    }
    .book-info-hide {
      height: 0;
    }
    .book-confirm {
      padding: 12px 28px;
      display: flex;
      .confirm-total {
        flex: 1;
        font-size: 14px;
        .total {
          height: 36px;
          line-height: 36px;
          padding-right: 14px;
          color: #666666;
        }
        .price {
          height: 36px;
          line-height: 36px;
          padding-right: 4px;
          color: #1F97BA;
        }
        .up-icon, .down-icon {
          height: 36px;
          line-height: 32px;
          color: #1F97BA;
          font-size: 18px;
          vertical-align: top;
        }
      }
      .confirm-btn {
        flex: 0 0 66px;
        height: 36px;
        line-height: 36px;
        font-size: 15px;
        color: #fff;
        text-align: center;
        background: #1F97BA;
        border-radius: 4px;
      }
    }
  }
}
</style>
