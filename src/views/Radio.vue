<template>
  <div>
    <h3>基础用法</h3>
    <BeeRadio
      label="单选"
      v-model="radio"
    >单选一</BeeRadio>
    <h3>单选按钮组用法</h3>
    <BeeRadio-group :nowValue="groupradio" :options="options">
    </BeeRadio-group>
  </div>
</template>

<script>
import BeeRadio from '@/components/BeeRadio'
import BeeRadioGroup from '@/components/BeeRadioGroup'
export default {
  data() {
    return {
      radio: 1,
      groupradio: 2,
      options:[
        {label:'单选一',disabled:true,value:1},
        {label:'单选二',disabled:false,value:2},
        {label:'单选三',disabled:false,value:3},
      ]
    }
  },
  components: {
    BeeRadio,
    BeeRadioGroup
  }
}
</script>

<style>
</style>