<template>
<transition name="fade">
  <div class="msg" :class="type ? `message-${type}`:''" >
    <p>{{ content }}</p>
  </div>
</transition>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      content: "哈哈哈",
      duration: 3000,
      type:''
    };
  },
  mounted() {
    setTimeout(() => {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }, this.duration);
  }
};
</script>


<style lang="scss" scoped>
.msg{
  width:200px;
  padding:10px 20px; 
  background:#c2e7b0;
  color:#fff;
  border-radius: 10px;
  margin:20px auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.message{
  &-warning{
    background-color:#f5dab1
  }
  &-error{
    background-color:#fbc4c4
  }
}
</style>