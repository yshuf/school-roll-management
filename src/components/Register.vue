<template>
  <div class="container">
    <div class="register">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="身份选择" prop="identity">
          <el-select v-model="ruleForm.identity" placeholder="请选择身份">
            <el-option label="学生" value="student"></el-option>
            <el-option label="老师" value="teacher"></el-option>
          </el-select>
        </el-form-item>
        <!-- 账号 -->
        <el-form-item label="账号" prop="id">
          <el-input type="text" v-model="ruleForm.id" autocomplete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 邮箱地址 -->
        <el-form-item label="邮箱" prop="email" v-if="test()">
          <el-input type="email" v-model="ruleForm.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <!-- 注册 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
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
        id: "",
        pass: "",
        identity: "",
        email: ""
      },
      rules: {
        id: [{ required: true, trigger: "blur" }],
        pass: [
          { required: true, trigger: "blur" },
          { min: 6, max: 8, message: "密码必须要6到8 位之间" }
        ],
        identity: [
          { required: true, message: "请选择身份", trigger: "change" }
        ],
        email: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            type: "success",
            message: "注册成功，去登录"
          });
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toRegister() {
      this.$router.push("/register");
    },
    test() {
      console.log(this.ruleForm.identity);
      if (this.ruleForm.identity != "teacher") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  background: url("../assets/images/register.jpg") no-repeat center center;
  background-size: 100% 100%;
  position: fixed;
}

.register {
  width: 350px;
  height: 300px;
  box-shadow: 2px 2px 14px #ccc;
  margin: 10% auto;
  padding: 20px 10px 20px 0px;
  box-sizing: border-box;
}
.title {
  font-size: 22px;
  font-family: cursive;
  font-style: italic;
  color: #000000;
  letter-spacing: 6px;
  margin: 30px auto;
}
.el-form-item {
  margin-left: -20px;
  margin-top: -5px;
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
.el-input {
  width: 80%;
}
.el-input--suffix {
  width: 105%;
  margin-left: -4px;
}
</style>
