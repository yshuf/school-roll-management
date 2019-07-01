<template>
  <div class="container">
    <h3 class="title">欢迎使用学籍管理系统</h3>
    <div class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <span>还没有账号，去<i class="register" @click="toRegister">注册</i></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: ""
      },
      rules: {
        username: [{ required: true, trigger: "blur" }],
        pass: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$router.push('/index');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toRegister(){
        this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: url("../assets/images/nav.jpg") no-repeat center center;
  background-size: 100% 100%;
  position: fixed;
}

.login {
  width: 350px;
  height: 250px;
  box-shadow: 2px 2px 14px #ccc;
  margin: 5% auto;
  padding: 30px 20px 20px 0px;
  box-sizing: border-box;
}
.title {
  font-size: 22px;
  font-family:cursive;
  font-style: italic;
  color: #000000;
  letter-spacing: 6px;
  margin: 30px auto;
}
.el-form-item {
  margin-left: -20px;
}
span {
    float: right;
    font-size: 16px;
}
.register {
    font-size: 18px;
    color: red;
    font-weight: 700;
    cursor: pointer;
}
</style>
