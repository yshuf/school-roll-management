<template>
  <div class="container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          text-color="#fff"
          background-color="#abd2f9"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document-checked"></i>
              <span>学籍信息</span>
            </template>
            <el-menu-item index="/check"><i class="el-icon-user"></i>本人</el-menu-item>
            <el-menu-item index="/checkM"><i class="el-icon-user-solid"></i>班主任</el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-s-check"></i>
              教导主任
              
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-chat-dot-round"></i>
              <span>注册信息</span>
            </template>
            <el-menu-item index="/registerInfo"><i class="el-icon-chat-line-round"></i>查看信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu {
  width: 200px;
  height: 880px;
}
</style>