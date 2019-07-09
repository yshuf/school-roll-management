<template>
  <div class="container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <!-- 以个体查询 -->
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
      </el-form-item>
      <!-- 以班级查询 -->
      <el-form-item label="班级选择">
        <el-select v-model="formInline.region" placeholder="请选择班级">
          <el-option label="三年二班" value="shanghai"></el-option>
          <el-option label="四年三班" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格信息 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{background:'#afa9d9',color:'#000'}"
      border
    >
      <el-table-column label="入学日期" width="200px" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="200px" align="center">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="班级" width="200px" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.grade }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200px" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        region: "",
        user: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          grade: "三年二班",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          grade: "三年二班",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          grade: "三年二班",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          grade: "三年二班",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.container {
  margin: 20px auto;
}
</style>
