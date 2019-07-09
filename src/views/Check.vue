<template>
  <!-- 学生学籍表 -->
  <div class="info">
    <h3>学生个人学籍表</h3>
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
    <!-- 入学以来信息情况 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :header-cell-style="{background:'#f0d7d7',color:'#000'}"
    >
      <el-table-column prop="date" label="年级" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="入学时间" width="100" align="center"></el-table-column>
      <el-table-column prop="address" label="所在学校" align="center" width="220"></el-table-column>
      <el-table-column prop="headmaster" label="班主任" align="center" width="100"></el-table-column>
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
          address: "上海市普陀区金沙江路 1518 弄",
          headmaster: "李艳丽"
        },
        {
          date: "二",
          name: "王二虎",
          address: "上海市普陀区金沙江路 1517 弄",
          headmaster: "李艳"
        },
        {
          date: "三",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1519 弄",
          headmaster: "李艳"
        },
        {
          date: "四",
          name: "王虎",
          address: "上海市普陀区金沙江路 1516 弄",
          headmaster: "李艳"
        },
        {
          date: "五",
          name: "王琉虎",
          address: "上海市普陀区金沙江路 1516 弄",
          headmaster: "李艳"
        },
        {
          date: "六",
          name: "王璃虎",
          address: "上海市普陀区金沙江路 1516 弄",
          headmaster: "李艳"
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
  font-family: cursive;
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
  background-color: #f0d7d7;
}
</style>
