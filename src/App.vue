<template>
  <div id="app">
    <div id="nav">
      <router-link
        to="/"
        tag="div"
      >Home</router-link>
      <router-link
        :to="{name:'BeeButton'}"
        tag="div"
      >按钮</router-link>
      <router-link  :to="{name:'BeeRadio'}" tag="div">单选框</router-link>
      <router-link :to="{name:'BeeMessage'}" tag="div">消息提示框</router-link>
      <router-link :to="{name:'BeeInput'}" tag="div">输入框</router-link>
    </div>
    <div class="main" id="main">
      <router-view />
    </div>
    <img
      src="@/assets/butterfly2.png"
      class="butterfly2"
    >
    <img
      src="@/assets/butterfly1.png"
      class="butterfly1"
    >
    <img
      src="@/assets/tree1.png"
      class="tree1"
    >
  </div>
</template>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

#nav {
  display: flex;
  flex-direction: column;
  width: 200px;
  background: #c2e7b0;
}
#nav div {
  padding: 12px 24px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

#nav div.router-link-exact-active {
  color: #42b983;
}
.main {
  flex: 1;
  padding: 20px;
}
.butterfly2 {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: fly1 15s ease-in infinite;
}
.butterfly1 {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: fly 15s linear infinite;
}
@keyframes fly {
  0% {
    left: 0px;
    bottom: 0;
  }
  30% {
    left: 90px;
    bottom: -38;
  }
  50% {
    left: 400px;
    bottom: 200px;
  }
  100% {
    left: 1800px;
    bottom: 100px;
  }
}

@keyframes fly1 {
  0% {
    right: 0px;
    bottom: 0;
  }
  30% {
    right:  400px;
    bottom: -38;
  }
  50% {
    right: 800px;
    bottom: 200px;
  }
  100% {
    right: 1300px;
    bottom: 100px;
  }
}
.tree1 {
  width: 80px;
  height: 80px;
  position: absolute;
  left: 154px;
  bottom: 0;
  animation: run 4s ease-out infinite alternate;
  transform-origin: 50% 100%;
}
@keyframes run {
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
</style>
