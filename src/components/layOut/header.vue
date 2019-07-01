<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <img src="@/assets/images/avatar.jpeg" alt />
    <el-dropdown>
      <i class="el-icon-arrow-down" style="margin-right: 15px;font-weight: 700;"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button type="text" @click="open">退出登录</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>你好</span>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "小学学籍管理系统"
    };
  },
  methods: {
    //  退出登录
    open() {
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功退出!"
          });
          this.$router.push('/');
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 60px;
  background-color: #abd2f9;
  position: relative;
  /* background: url('../../assets/images/nav.jpg') no-repeat 50% 50%; */
}
h1 {
  font-weight: 400;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-style: italic;
  margin-top: 8px;
  letter-spacing: 8px;
  color: #fff;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 55px;
}
.el-dropdown {
  position: absolute;
  top: 25px;
  right: 10px;
  margin-right: 0;
}
span {
  position: absolute;
  top: 35px;
  right: 15px;
  font-size: 16px;
}
</style>
