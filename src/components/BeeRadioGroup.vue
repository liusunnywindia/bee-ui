<template>
  <div class="radioGroup">
    <template >
    <BeeRadio v-for="(item,index) in options" :key="index"  :label="item.label" :value="item.value" 
    :nowValue="now"
    :disable="item.disabled" @change="change" />
    </template>
  </div>
</template>

<script>
import BeeRadio from './BeeRadio.vue'
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    nowValue:{

    }
  },
  data() {
    return {
      now:this.nowValue

    }
  },
  components: {
    BeeRadio
  },
  methods: {
    change(val){
      console.log(val);
      this.now = val;

    }
  }
}
</script>

<style>
</style>