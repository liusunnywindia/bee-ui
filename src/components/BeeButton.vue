<template>
  <Button
    class="btn"
    :class="[type,{ 'is-circle': circle},{'is-disabled':disabled},{'is-loading':loading}]"
    :disabled="disabled"
  ><img
      src="@/assets/bee.svg"
      class="icon"
    >
    <div
      class="loader"
      :class="`loading-color-`+type"
      v-if="loading"
    ></div>
    {{text}}
  </Button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    type: {
      type: String
    },
    circle: Boolean,
    disabled: Boolean,
    loading: Boolean

  },
  data() {
    return {
    }

  }
}
</script>

<style lang="scss" scoped>
$loading-color-danger: #f56c6c;
$loading-color-warning: #f7971e;
$loading-color-success: #67c23a;
.btn {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  outline: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  &.is-circle {
    &:hover {
      border-radius: 60% 0 50% 0;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
  &.warning {
    color: #f7971e;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  &.success {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }

  &.danger {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  &:hover {
    .icon {
      animation: fly 2s ease 1;
    }
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    padding-right: 5px;
    position: absolute;
    left: -16px;
    top: -9px;
  }
}

@keyframes fly {
  0% {
    transform: translateX(0%);
  }
  10% {
    transform: translateX(30%);
  }
  60% {
    transform: translateX(240%) translateY(40%);
  }
  80% {
    transform: translateX(80%);
  }
  100% {
    transform: translateX(0%);
  }
}
.loader {
  color: #999;
  font-size: 15px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 0px 4px;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load 1.7s infinite ease, round 1.7s infinite ease;
  animation: load 1.7s infinite ease, round 1.7s infinite ease;
  &.loading-color-warning {
    color: $loading-color-warning;
  }
  &.loading-color-success {
    color: $loading-color-success;
  }
  &.loading-color-danger {
    color: $loading-color-danger;
  }
}

@keyframes load {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>