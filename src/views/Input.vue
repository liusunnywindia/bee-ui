<template>
  <div class="input-row">
    <h3>普通用法</h3>
    <BeeInput v-model="input" placeholder="请输入内容" />
     <h3>禁用状态</h3>
    <BeeInput v-model="input1" placeholder="请输入内容" :disabled="true"/>
    <h3>可清空状态</h3>
    <BeeInput v-model="input2" placeholder="请输入内容" clearable/>
    <h3>多行文本框</h3>
    <BeeInput v-model="input3" placeholder="请输入内容" type="textarea"  clearable :rows="4"/>
  </div>
</template>

<script>
import BeeInput from '@/components/BeeInput'
export default {
  data() {
    return{
      input:'',
      input1:'',
      input2:999,
      input3:''
    }
  },
  components: {
    BeeInput
  }
}
</script>

<style lang="scss" scoped>
.input-row{
  display:flex;
  flex-direction:column;
  align-items:center;
}
h3{
  margin: 10px 0;
}
</style>