<template>
  <div class="container">
    <h3>{{msg}}</h3>
    <span class="star">☆</span>
    <el-table :data="tableData" border style="width: 100%;" :header-cell-style="{background:'#abd9d9',color:'#000'}">
      <el-table-column fixed prop="date" label="入学日期" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="province" label="省份" width="120" align="center"></el-table-column>
      <el-table-column prop="city" label="市区" width="120" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" width="300" align="center"></el-table-column>
      <el-table-column prop="zip" label="所在班级" width="120" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="success" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
     methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
          msg: "某某班学生的学籍表",
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
}
</script>

<style scoped>
.container {
    width:1100px;
    height: 600px;
    margin: 30px auto;
    box-shadow: 2px 2px 14px #facfcf;
    font-family: "KaiTi";
}
h3 {
    font-family: cursive;
}
.star {
  color: red;
  animation: star 3 linear infinite alternate;
}
@keyframes star {
  0% {
    right: 0;
    bottom: 0
  }
  25% {
    left: 50%;
    bottom: 50%;
  }
  50% {
    left: 0;
    top: 0
  }
  100% {
    top: 25%;
    left: 50%;
  }
}
</style>