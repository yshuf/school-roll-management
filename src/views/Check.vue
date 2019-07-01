<template>
  <div class="info">
    <h3>学生学籍表</h3>
    <el-row>
      <el-col>
        <span class="name">姓名：</span>
        <span>身份证号：</span>
      </el-col>

      <el-col>
        <span>性别：</span>
        <span>民族：</span>
      </el-col>

      <el-col>
        <span>年龄：</span>
        <span>籍贯：</span>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="年级" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="入学时间" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="所在学校" align="center"></el-table-column>
      <el-table-column prop="address" label="班主任" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "一",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "二",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "三",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "四",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "五",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "六",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.info {
  width: 800px;
  height: 600px;
  box-shadow: 2px 2px 14px #ccc;
  margin: 50px auto;
}
h3 {
  font-family:cursive;
  font-style: oblique;
  letter-spacing: 10px;
}
span {
  margin: 10px 88px;
  font-size: 16px;
  /* font-family: STKaiti; */
  font-family: cursive;
  font-weight: 700;
  letter-spacing: 6px;
}
.name {
  margin-right: 43px;
}
.el-table {
  margin: 50px auto;
}
</style>
