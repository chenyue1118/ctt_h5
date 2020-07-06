<template lang="html">
  <div class="test2">
    <datepicker
      :popupStatus='popupStatus'
      :minDate="minDate"
      :current="current"
    ></datepicker>
  </div>
</template>

<script>
import datepicker from '@/components/DatePicker.vue'

export default {
  name: 'test2',
  components: {
    datepicker
  },
  data() {
    return {
      popupStatus: false,
      minDate: new Date(),
      current: new Date()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
