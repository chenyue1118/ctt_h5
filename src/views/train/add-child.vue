<template lang="html">
  <div class="personal-address">
    <div class="address-header">
      <div class="header-back">
        <van-icon class="back-icon" name="arrow-left" @click="goback" />
        <div class="back-text">Add Child</div>
        <span class="back-save" @click="onSubmit">Save</span>
      </div>
    </div>
    <div class="address-content">
      <van-form ref="addressFrom">
        <van-field
          class="content-item"
          v-model="param.key1"
          placeholder="* Surname"
          :rules="[{ required: true, message: 'Place input Surname' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key2"
          placeholder="* Given Names"
          :rules="[{ required: true, message: 'Place input Given Names' }]"
        />
        <van-field
          readonly
          clickable
          class="content-item"
          v-model="param.key21"
          placeholder="* 证件类型"
          @click="certstatus = true"
          :rules="[{ required: true, message: '证件类型' }]"
        />
        <van-action-sheet v-model="certstatus" :actions="certactions" @select="certSelect" />

        <van-field
          class="content-item"
          v-model="param.key3"
          placeholder="* ID Number"
          :rules="[{ required: true, message: 'Place input ID Number' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key4"
          placeholder="* Nation"
          :rules="[{ required: true, message: 'Place input Nation' }]"
        />
        <van-field
          class="content-item"
          v-model="param.key5"
          placeholder="Birthday"
          :rules="[{ required: true, message: 'Place Birthday' }]"
        />
      </van-form>
      <div class="content-trips">
        Free ride below (Height:120cm-150cm)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-child',
  data() {
    return {
      certstatus: false,
      certactions: [{name: '身份证'}],
      param: {
        key1: '',
        key21: ''
      }
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    certSelect(val) {
      console.log(val)
      this.certstatus = false
      this.param.key21 = val.name
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
    .content-trips {
      padding-top: 10px;
      font-size: 12px;
      color: #F1951E;
    }
  }
}
</style>
