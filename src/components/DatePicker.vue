<template lang="html">
  <div class="date-picker">
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="Select date"
        confirm-button-text="Confirm"
        cancel-button-text="Cancel"
        :min-date="minDate"
        @confirm="confirmDate"
        @cancel="cancelDate"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'date-picker',
  props: {
    popupStatus: {
      type: Boolean,
      default: false
    },
    minDate: {
      type: Object,
      default: () => new Date()
    }
    current: {
      type: Object,
      default: () => new Date()
    }
  },
  watch: {
    popupStatus() {
      this.show = this.popupStatus
    },
    current() {
      this.currentDate = this.current
    }
  },
  data() {
    return {
      show: false,
      currentDate: new date()
    }
  },
  methods: {
    confirmDate(val) {
      this.$emit('date', window.moment(val).format('YYYY/MM/DD'))
      this.show = false
    },
    cancelDate() {
      this.show = false
    }
  },
  created() {
    // 初始化
    this.show = this.popupStatus
    this.currentDate = this.current
  }
}
</script>

<style lang="css" scoped>
</style>
