<template lang="html">
  <div class="layout">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    key() {
      return this.$route.path
    }
  },
  methods: {
    // TODO: 监听 URL 是否携带 token 参数， 有则需要存储到cookie
    // TODO: 监听反馈没有登录用户，弹窗显示登录页面
  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
