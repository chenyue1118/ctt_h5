<template lang="html">
  <div class="train-help">
    <div class="help-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <div class="back-text">Deliver to my China hotel</div>
        <span class="back-save"></span>
      </div>
    </div>
    <div class="help-content">
      <div class="content-items">
        <span class="item-name">How to Book Tickets</span>
        <van-icon class="item-icon" name="arrow" />
      </div>
      <div class="content-items">
        <span class="item-name">How to know my Booking Status</span>
        <van-icon class="item-icon" name="arrow" />
      </div>
      <div class="content-items">
        <span class="item-name">How to Collect Tickets</span>
        <van-icon class="item-icon" name="arrow" />
      </div>
      <div class="content-items">
        <span class="item-name">How to Choose Train</span>
        <van-icon class="item-icon" name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'help-list',
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.train-help {
  padding-top: 56px;
  height: 100%;
  background: #FFFFFF;
  .help-header {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    padding: 8px 12px;
    border-bottom: 1px solid #DCDCDC;
    .header-back {
      display: flex;
      .back-icon {
        flex: 0 0 40px;
        height: 40px;
        line-height: 40px;
        color: #333333;
        font-size: 20px;
      }
      .back-save {
        flex: 0 0 40px;
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #1F97BA;
      }
      .back-text {
        flex: 1;
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #333333;
        font-weight: 550;
      }
    }
  }
  .help-content {
    padding: 10px 15px;
    .content-items {
      border-bottom: 1px solid #DCDCDC;
      display: flex;
      justify-content: space-between;
      .item-name {
        flex: 1;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        color: #333333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .item-icon {
        flex: 0 0 48px;
        height: 48px;
        line-height: 48px;
        text-align: right;
        color: #999999;
        font-size: 18px;
      }
    }
  }
}
</style>
