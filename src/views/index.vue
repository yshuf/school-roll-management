<template>
  <div class="container">
    <el-container>
      <HeaderNav></HeaderNav>
    </el-container>
    <el-container>
        <Aside style="background-color: #add0f3"></Aside>
        <el-container>
          <router-view></router-view>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from "@/components/layOut/header";
import Aside from "@/components/layOut/aside";
export default {
  components: {
    HeaderNav,
    Aside,
  }
};
</script>

<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
