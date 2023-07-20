<template>
  <div class="not-found-container">
    <img src="../../assets/images/404.png" alt="" />
    <el-button type="primary" @click="goHome">返回首页</el-button>
  </div>
</template>
<script name="NotFound">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "404",
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push({
        path: "/home",
      });
    };
    return {
      goHome,
    };
  },
});
</script>
<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 100px;
}
img {
  width: 700px;
  height: 320px;
}
.el-button {
  margin-top: 20px;
}
</style>
