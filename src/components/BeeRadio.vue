<template>
  <div
    class="radio-btn"
    :class="{'is-disabled':disable}"
  >
   <input
      type="radio"
      :value="value"
      @change="handleChange"
      :disabled="disable"
      name="Bee"
      v-model="value"
    >
    <div
      class="radio active"
    >
      <img
        src="@/assets/gou.svg"
        class="img"
      >
    </div>
    <span>{{label}}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    value: {

    },
    disable: {
      type: Boolean
    },
    nowValue:{

    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    handleChange(e) {
        this.$emit('change',+e.target.value)
    },
     sayMsg() {
        }
  },
  watch: {
    nowValue:{
      handler: 'sayMsg',
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 100px;
  & input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    &:checked+.active{
      background: #42b983;
    }
  }
    &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
.radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #c2e7b0;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;


  .img {
    width: 100%;
    height: 100%;
  }
}
</style>