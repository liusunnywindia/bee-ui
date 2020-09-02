<template>
  <div>
    <div
      class="BeeInput"
      v-if="type!=='textarea'"
    >
      <input
        :placeholder="$attrs.placeholder"
        v-bind="$attrs"
        :value="value"
        :disabled="disabled"
        @input="onInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <img
        v-if="clearable"
        src="@/assets/close.svg"
        class="close-img"
        @click="clearData"
      />
    </div>
    <div
      v-else
      class="BeeTextarea"
    >
      <textarea
        :placeholder="$attrs.placeholder"
        v-bind="$attrs"
        :value="value"
        :disabled="disabled"
        @input="onInput"
        @blur="handleBlur"
        @focus="handleFocus"
        :rows='rows'
      ></textarea>
      <img
        v-if="clearable"
        src="@/assets/close.svg"
        class="close-img"
        @click="clearData"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean
    },
    clearable: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    rows: {
      type: Number
    }
  },
  data() {
    return {
      isFocus: false, // 判断是否键入
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
    handleBlur() {
      this.isFocus = false
    },
    handleFocus() {
      this.isFocus = true
    },
    clearData() {
      console.log(888)
      this.$emit('input', '');
    }
  }
}
</script>

<style lang="scss" scoped>
.BeeInput {
  width: 180px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  & .close-img {
    position: absolute;
    right: 0;
    top: 15px;
  }
  & input {
    padding: 0 15px;
    border: 0;
    font-size: 15px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #dcdfe6;
    height: 40px;
    cursor: pointer;
    &:focus {
      border: 1px solid #42b983;
    }
    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
}
.BeeTextarea {
  border-radius: 8px;
  cursor: pointer;
  position: relative;
   & .close-img {
    position: absolute;
    right: 5px;
    bottom: 10px;
  }
  & textarea {
    font-size: 15px;
    outline: none;
    border: 0;
    padding: 5px 15px;
    border: 1px solid #dcdfe6;
    border-radius: 7px;
    cursor: pointer;
    &:focus {
      border: 1px solid #42b983;
    }
    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
}
</style>