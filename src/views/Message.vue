<template>
  <div class="button-row">
    <BeeButton
      @click.native="open"
      text="点击我哈"
    />
    <BeeButton
      text="点击危险按钮"
      type="danger"
      @click.native="openError"
    />
        <BeeButton
        text="警告按钮"
        type="warning"
        @click.native="openwarn"
      />
  </div>
</template>

<script>
import BeeButton from '@/components/BeeButton'
export default {
  data() {
    return {
    }
  },
  components: {
    BeeButton
  },
  methods: {
    open() {
      this.$message({ content: '这是个美丽的少年哈哈哈', duration: 1000 })
    },
    openError(){
      this.$message.error({content:'有错误哦'})
    },
    openwarn(){
      this.$message.warning({content:'警告：你已经被包围了'})
    }
  }
}
</script>

<style lang="scss" scoped>
.button-row{
  display:flex;
}
</style>