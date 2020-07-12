<template lang="html">
  <div class="hotel-address">
    <div class="address-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <div class="back-text">Deliver to my China hotel</div>
        <span class="back-save" @click="onSubmit">Save</span>
      </div>
    </div>
    <div class="address-content">
      <van-form ref="addressFrom">
        <van-field
          class="content-item"
          v-model="param.key1"
          placeholder="* Hotel Name"
          :rules="[{ required: true, message: 'Place input Hotel Name' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key2"
          placeholder="* Hotel Address"
          :rules="[{ required: true, message: 'Place input Hotel Address' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key3"
          placeholder="* Hotel Phone No."
          :rules="[{ required: true, message: 'Place input Hotel Phone No.' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key31"
          placeholder="* Booking Name"
          :rules="[{ required: true, message: 'Place input Booking Name' }]"
        />
        <van-field
          class="content-item"
          readonly
          clickable
          :value="param.key4"
          placeholder="* Check In Date"
          @click="setDate(1)"
          :rules="[{ required: true, message: 'Place input Check In Date' }]"
        />
        <van-field
          class="content-item"
          readonly
          clickable
          :value="param.key5"
          placeholder="* Check Out Date"
          @click="setDate(2)"
          :rules="[{ required: true, message: 'Place input Check Out Date' }]"
        />
        <van-calendar
          title="Select date"
          v-model="showCalendar" @confirm="onConfirm" />
        <van-field
          class="content-item"
          v-model="param.key5"
          placeholder="Booking Agency / Website"
        />
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotel-address',
  data() {
    return {
      showCalendar: false,
      dateType: 1,
      param: {
        key1: ''
      }
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    setDate(index) {
      this.dateType = index
      this.showCalendar = true
    },
    onConfirm(date) {
      console.log(date)
      this.showCalendar = false
    },
    onSubmit() {
      this.$refs.addressFrom.submit()
    }
  }
}
</script>

<style lang="less" scoped>
.hotel-address {
  padding-top: 56px;
  height: 100%;
  background: #FFFFFF;
  .address-header {
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
  .address-content {
    padding: 20px 18px;
    .content-item {
      margin: 2px 0;
      border-bottom: 1px solid #DCDCDC;
    }
  }
}
</style>
