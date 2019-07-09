<template>
  <div class="register">
    <h1>个人信息表</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: "迪仔",
        grade: "三年二班",
        hobby: "唱歌",
        time: "1998年06月03日"
      }
    };
  }
};
</script>

<style>
.register {
  width: 800px;
  height: 500px;
  box-shadow: 2px 2px 14px #ccc;
  margin: 60px auto;
}
h1 {
  font-size: 22px;
  font-family: "Courier New", Courier, monospace;
}

</style>
