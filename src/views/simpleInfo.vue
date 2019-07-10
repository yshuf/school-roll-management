<template class="myself">
  <!-- 学生学籍表 -->
  <div class="info">
    <h3>学生个人基本信息表</h3>
    <!-- 入学以来信息情况 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :header-cell-style="{background:'#f0d7d7',color:'#000'}"
    >
      <el-table-column prop="name" label="姓名" width="100" align="center"></el-table-column>
      <el-table-column prop="idCardNumber" label="身份证号" width="180" align="center"></el-table-column>
      <el-table-column prop="studentId" label="学号" align="center" width="100"></el-table-column>
      <el-table-column prop="classes" label="班级" align="center" width="100"></el-table-column>
      <el-table-column prop="sex" label="性别" align="center" width="100"></el-table-column>
      <el-table-column prop="age" label="年龄" align="center" width="100"></el-table-column>
      <el-table-column prop="nation" label="民族" align="center" width="100"></el-table-column>
      <el-table-column prop="nativePlace" label="户籍地" align="center" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "",
          idCardNumber: "",
          studentId: "",
          classes: "",
          sex:"",
          age:"",
          nation:"",
          nativePlace:""
        }
      ]
    };
  },
  mounted(){
    this.getSimpleMsg();
  },
  methods: {
    getSimpleMsg(){
      this.$axios.get('/student/simple?idCardNumber='+'360730199704261188').then(res=>{
      console.log(res);
      if(res.data.code==31){
        this.$message.success(res.data.msg);
        console.log(res);
        console.log(res.data.data);
        let simpleMsg=res.data.data;
        this.tableData[0].name=simpleMsg.name;
        this.tableData[0].idCardNumber=simpleMsg.idCardNumber;
        this.tableData[0].studentId=simpleMsg.studentId;
        this.tableData[0].classes=simpleMsg.classes;
        this.tableData[0].sex=simpleMsg.sex;
        this.tableData[0].age=simpleMsg.age;
        this.tableData[0].nation=simpleMsg.nation;
        this.tableData[0].nativePlace=simpleMsg.nativePlace;
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
  margin: 10px auto;
}
h3 {
  font-family: cursive;
  font-style: oblique;
  letter-spacing: 10px;
}
.name {
  margin-right: 43px;
}
.el-table {
  margin: 50px auto;
  background-color: #f7d2d2;
}
</style>
