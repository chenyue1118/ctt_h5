<template lang="html">
  <div class="test">
    测试页面
    <a @click="link">测试跳转</a>
  </div>
</template>

<script>
export default {
  name: 'test',
  methods: {
    link() {
      this.$router.push({
        path: '/query'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
