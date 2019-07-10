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
        <el-form-item label="密码" prop="passwd">
          <el-input type="password" v-model="ruleForm.passwd" autocomplete="off" placeholder="请输入密码"></el-input>
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
        if (this.ruleForm.passwd !== "") {
          this.$refs.ruleForm.validateField("passwd");
        }
        callback();
      }
    };
    return {
      // 验证表单
      ruleForm: {
        username: "",
        passwd: ""
      },
      rules: {
        username: [{ required: true, trigger: "blur",message: "账号为你的身份证号" }],
        passwd: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登录处理函数
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let username=this.ruleForm.username;
          let passwd=this.ruleForm.passwd;
          this.$axios.post('/goLogin?username='+username+"&passwd="+passwd,).then(res=>{
            if(res.data.code=11) {
              this.$message.success("登录成功！欢迎你！");
              this.$router.push('/index');
              console.log(res);
            }
          }).catch(err=>{
            this.$message.error(err);
          });
        } else {
          this.$message.error("密码和账号格式不正确哦！！！");
        }
      });
    },
    // 重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 去注册
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
