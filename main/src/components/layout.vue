<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="0"
        text-color="#fff"
      >
        <p class="title">管理后台</p>
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="index"
          :index="index + ''"
          @click="handleJump(item)"
        >
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view v-show="!subFlag"></router-view>
        <div id="sub-vue-viewport"></div>
        <div id="sub-react-viewport"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import microApps from "../micro-app";
const subFlag = ref(false);
const handleLocationChange = () => {
  const newUrl = window.location.href;
  subFlag.value = newUrl.includes("sub");
};
window.addEventListener("hashchange", handleLocationChange);
window.addEventListener("popstate", handleLocationChange);
const router = useRouter();
const menuList = ref([
  {
    name: "首页",
    path: "/home",
  },
  ...microApps,
]);

const handleJump = (item) => {
  if (item.activeRule) {
    history.pushState(null, item.activeRule, item.activeRule);
  } else if (subFlag.value && item.path) {
    window.location.href = "/";
  } else {
    router.push(item.path);
  }
};
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
