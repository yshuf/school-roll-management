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
      style="width: 45%"
      :header-cell-style="{background:'#f0d7d7',color:'#000'}"
    >
      <el-table-column prop="id" label="年级" width="100" align="center"></el-table-column>
      <el-table-column prop="s" label="入学时间" width="100" align="center"></el-table-column>
      <el-table-column prop="e" label="结束时间" width="100" align="center"></el-table-column>
      <el-table-column prop="sc" label="所在学校" align="center" width="220"></el-table-column>
      <el-table-column prop="t" label="班主任" align="center" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tableData: [
        {
          id: '一',
          s: '',
          e: '',
          sc: '',
          t: ''
        },
        {
          id: '二',
          s: '',
          e: '',
          sc: '',
          t: ''
        },
        {
          id: '三',
          s: '',
          e: '',
          sc: '',
          t: ''
        },
        {
          id: '四',
          s: '',
          e: '',
          sc: '',
          t: ''
        },
        {
          id: '五',
          s: '',
          e: '',
          sc: '',
          t: ''
        },
        {
          id: '六',
          s: '',
          e: '',
          sc: '',
          t: ''
        }
      ]
    };
  },
  mounted(){
    this.getDetailMsg();
  },
  methods: {
    getDetailMsg(){
      this.$axios.get('/student/detail?idCardNumber='+"360730199704261188").then(res=>{
        console.log(res);
        if(res.data.code==33){
          this.$message.success(res.data.msg);
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
};
</script>

<style scoped>
.info {
  width: 10;
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
