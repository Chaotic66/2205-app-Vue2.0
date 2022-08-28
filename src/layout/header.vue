<template>
    <div class="header">
        <el-row>
            <!-- //#左 -->
            <el-col :span="8">
                <div class="grid-content left">
                    <i class="iconfont icon-shouqi1"></i>
                </div>
            </el-col>
            <!-- //#中 -->
            <el-col :span="8">
                <div class="grid-content center">CRM管理系统</div>
            </el-col>
            <!-- //#右 -->
            <el-col :span="8">
                <div class="grid-content right">
                    <div class="portrait">
                        <img src="../assets/img/ws.png" alt="">
                    </div>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
                        <el-submenu index="2" popper-class='menu1'>
                            <template slot="title" >没雨溪</template>
                            <div class="downMenu">
                                <el-menu-item class="pullDown" index="2-1">VIP充值</el-menu-item>
                                <el-menu-item class="pullDown" index="2-2">账号信息</el-menu-item>
                                <el-menu-item class="pullDown" index="2-3">项目管理</el-menu-item>
                                <el-menu-item class="pullDown" index="2-4">退出</el-menu-item>
                            </div>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-col>
            
        </el-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style lang='less'scoped>
    .el-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    //#头部 左
    .left{
        padding-left: 20px;
        color: white;  
        text-align: left;
        .icon-shouqi1{
            
            z-index: 99999;
            cursor: pointer;
            font-size: 30px;
            
        }
    }
    //#头部 中
    .center{
        color: white;  
        font-size: 30px;
    }
    //#头部 右
    .right{
        display: flex;
        justify-content: center;
        .portrait{
            padding-top: 10px;
            height: 100%;
            img{
                width: 40px;
                height: 40px;
                z-index: 999;
            }
        }
        .el-menu-demo{
            background-color: transparent;
           
            /deep/.el-submenu__title{
                color: white;
                // margin-left: 20px;
                i{
                    color: white;
                }
            }
            /deep/.el-submenu__title:hover{
                color: #e36e4f;
                background-color: transparent !important;
                i{
                    color: #e36e4f;
                }
            }     
        }
    }
    //#管理下拉菜单
    .downMenu{
    /deep/.pullDown{
                text-align: center !important;
            }
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>