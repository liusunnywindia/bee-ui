<template>
  <div class="input-row">
    <div class="btn" @click="handleClick">点击全屏</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      let docElm = document.documentElement;

      //W3C

      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }

      //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }

      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }

      //IE11
      else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  color: #fff;
}
</style>
