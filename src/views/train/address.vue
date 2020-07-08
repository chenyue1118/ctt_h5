<template lang="html">
  <div class="train-address">
    <div class="query-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" />
        <span class="back-text">PingFang-SC-Medium</span>
        <van-icon class="back-icon back-icon-hide" name="arrow-left" />
      </div>
      <div class="header-info">
        <van-search
          v-model="inputCity"
          @focus="handleFocus"
          @search="handleSearch"
          placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div class="query-association">
      <div class="association-items">
        <span>left</span>
        <span>right</span>
      </div>
    </div>
    <div class="query-history">
      <span class="history-title">histroy input：</span>
      <span class="history-info">aaa</span>
    </div>
    <div class="query-history">
      <span class="history-title">Hot City：</span>
      <span class="history-info">aaa</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'train-address',
  data() {
    return {
      inputCity: ''
    }
  },
  methods: {
    // 输入框光标输入
    handleFocus() {},
    // 输入框搜索确定
    handleSearch() {}
  }
}
</script>

<style lang="less" scoped>
.train-address {
  .query-header {
    width: 100%;
    padding: 8px 18px;
    background: #F12A3E;
    .header-back {
      // 32 36
      display: flex;
      padding: 10px 0;
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
  }
}
</style>
