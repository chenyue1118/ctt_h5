<template lang="html">
  <div class="personal-address">
    <div class="address-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <div class="back-text">Deliver to a personal address</div>
        <span class="back-save" @click="onSubmit">Save</span>
      </div>
    </div>
    <div class="address-content">
      <van-form ref="addressFrom">
        <van-field
          class="content-item"
          v-model="param.key1"
          placeholder="* Delivery Address"
          :rules="[{ required: true, message: 'Place input Delivery Address' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key2"
          placeholder="* Receiver's Name"
          :rules="[{ required: true, message: 'Place input Receiver\'s Name' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key3"
          placeholder="* Phone Number"
          :rules="[{ required: true, message: 'Place input Phone Number' }]"
        />
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal-address',
  data() {
    return {
      param: {
        key1: ''
      }
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    onSubmit() {
      this.$refs.addressFrom.submit()
    }
  }
}
</script>

<style lang="less" scoped>
.personal-address {
  padding-top: 56px;
  height: 100%;
  background: #FFFFFF;
  .address-header {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    padding: 8px 12px;
    // background: #F12A3E;
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
  .address-content {
    padding: 20px 18px;
    .content-item {
      margin: 2px 0;
      border-bottom: 1px solid #DCDCDC;
    }
  }
}
</style>
