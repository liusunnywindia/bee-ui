<template>
  <div>
    <h3>基础用法</h3>
    <div class="button-row">
      <BeeButton text="默认按钮" />
      <BeeButton
        text="警告按钮"
        type="warning"
      />
      <BeeButton
        text="成功按钮"
        type="success"
      />
      <BeeButton
        text="危险按钮"
        type="danger"
      />
    </div>
    <div class="button-row">
      <BeeButton
        text="默认圆角按钮"
        circle
      />
      <BeeButton
        text="警告圆角按钮"
        type="warning"
        circle
      />
      <BeeButton
        text="成功圆角按钮"
        type="success"
        circle
      />
      <BeeButton
        text="危险圆角按钮"
        type="danger"
        circle
      />
    </div>
    <h3>禁用状态</h3>
    <div class="button-row">
      <BeeButton
        text="默认按钮"
        disabled
      />
      <BeeButton
        text="警告按钮"
        type="warning"
        disabled
      />
      <BeeButton
        text="成功按钮"
        type="success"
        disabled
      />
      <BeeButton
        text="危险按钮"
        type="danger"
        disabled
      />
    </div>
      <h3>加载状态</h3>
    <div class="button-row">
      <BeeButton
        text="默认按钮"
        loading
      />
      <BeeButton
        text="警告按钮"
        type="warning"
        loading

      />
      <BeeButton
        text="成功按钮"
        type="success"
        loading
      />
      <BeeButton
        text="危险按钮"
        type="danger"
        loading
      />
    </div>
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
  }
}
</script>

<style lang="scss" scoped>
.button-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 30px;
}
</style>