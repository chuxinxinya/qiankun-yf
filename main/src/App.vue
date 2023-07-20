<template>
  <div id="app">
    <component :is="layoutComponent">
      <router-view></router-view>
    </component>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const layoutComponent = computed(() => {
  return route.meta.layout || "defaultLayout";
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-container {
  width: 100vw;
  height: 100vh;
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
}

.title {
  font-size: 28px;
  padding: 20px;
  color: #fff;
  text-align: left;
}
</style>
