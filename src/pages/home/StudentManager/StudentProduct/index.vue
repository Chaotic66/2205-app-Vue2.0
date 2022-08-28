<template>
    <div>
        <div class="top">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">学员管理</el-breadcrumb-item>
                <el-breadcrumb-item>学员项目管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="search">
            <div class="el-select"> 
                <el-input placeholder="请输入内容" v-model="input" clearable suffix-icon></el-input>
            </div>
            <el-button type="primary" icon="el-icon-search" class="is-plain"></el-button>
            <el-button type="primary">添加项目</el-button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            input: ''
        }
    }
  }
</script>

<style lang='less' scoped>
    .search{
        text-align: left;
        .el-select{
            display: inline-block;
        }
        .is-plain{
            color: #409eff;
            background: #ecf5ff;
            
        }
        .is-plain:hover{
            background:#409eff;
            color: white;
            border-color: #b3d8ff;
        }
    }
</style>