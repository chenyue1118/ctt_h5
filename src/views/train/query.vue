<template lang="html">
  <div class="train-query">
    <div class="query-header">
      <div class="header-back">
        <van-icon name="arrow-left" />
      </div>
      <div class="header-info">
        <input class="info-input" />
      </div>
    </div>
    <div class="query-association">
      <div class="association-items">
        <span>left</span>
        <span>right</span>
      </div>
    </div>
    <div class="query-history">
      <span class="history-title">历史输入：</span>
      <span class="history-info">aaa</span>
    </div>
    <div class="query-history">
      <span class="history-title">热门城市：</span>
      <span class="history-info">aaa</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'train-query'
}
</script>

<style lang="less" scoped>
.train-query {
  
}
</style>
