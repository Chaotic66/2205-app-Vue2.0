<template>
    <div>    
        <div class="top">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>管理首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="welcome">
            <el-table :data="tableData" border style="width: 100%" class="welTable">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="time" label="登录时间" sortable width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </div>
    </div>
</template>





<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            time:'2022/08/28 21:51:41',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            time:'2022/08/28 21:51:42',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            time:'2022/08/28 21:51:43',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            time:'2022/08/28 21:51:44',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>


<style lang='less' scoped>
    .welTable{
        margin-top: 50px;
        /deep/.has-gutter{
            text-align: center;
            line-height: 0;
        }
    }
  
  
</style>

