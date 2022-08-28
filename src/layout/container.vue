<template>
  <div class="layout-container">
    <el-container>
        <!-- //#侧边 -->
        <el-aside width="200px">
            <div class="asideTop">
                <img  src="../assets/img/logo.png" alt="">
            </div>
            <div class="asideBottom">
                <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group> -->
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-menu-item index="1">
                        <i class="iconfont icon-xueyuan1"></i>
                        <span slot="title">管理首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="iconfont icon-shouye1"></i>
                            <span slot="title">学员管理</span>
                        </template>
                        <el-menu-item class="groupOne">
                            <i class="iconfont icon-shangpinguanli"></i>
                            <span>学员项目管理</span>
                        </el-menu-item>
                        <el-menu-item class="groupOne">
                            <i class="iconfont icon-shuju1"></i>
                            <span>学员资料管理</span>
                        </el-menu-item>
                        <el-menu-item class="groupOne">
                            <i class="iconfont icon-shouye"></i>
                            <span>学员宿舍</span>
                        </el-menu-item>
                    </el-submenu>
                    
                    <el-menu-item index="3" >
                        <i class="iconfont icon-kaoqin3"></i>
                        <span slot="title">考勤管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="iconfont icon-yonghu"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="iconfont icon-yonghu"></i>
                        <span slot="title">数据统计</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <i class="iconfont icon-yonghu"></i>
                        <span slot="title">我的中心</span>
                    </el-menu-item>

                    <el-submenu index="7">
                        <template slot="title">
                            <i class="iconfont icon-shouye1"></i>
                            <span slot="title">vip管理</span>
                        </template>
                        <el-menu-item class="groupOne">
                            <i class="iconfont icon-shangpinguanli"></i>
                            <span>vip充值</span>
                        </el-menu-item>
                        <el-menu-item class="groupOne">
                            <i class="iconfont icon-shuju1"></i>
                            <span>订单管理</span>
                        </el-menu-item>
                    </el-submenu>

                </el-menu>
            </div>
        </el-aside>
        <!-- //#中间 -->
        <el-container>
            <el-header>
                <Headerlayout />
            </el-header>
            <el-main>
                
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>


<script>
    import Headerlayout from '@/layout/header.vue'
    export default{
        components:{
            Headerlayout
        },
        data() {
            return {
                isCollapse: false
            };
        },
         methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>





<style lang='less' scoped>
  .el-header, .el-footer {
    background-image: url(../assets/img/containHead.png);
    background-size: 100% 80px;
    color: #333;
    text-align: center;
    line-height: 60px;
    
  }
  
    .el-aside {
        background: linear-gradient(270deg,rgba(22,15,0),#010101);
        overflow-x: hidden;
        box-sizing: border-box;
        color: #e36e4f;
        text-align: center;
        line-height: 200px;
        .asideTop{
            position: absolute;
            left: 0;
            width: 240px;
            height: 75px;
            background-image: url(../assets/img/topleft.png);
            background-size: 120% 170%;
            background-repeat: no-repeat;
            z-index: 100;
            img{
                position: absolute;          
                left: 60px;
                width: 70px;
                height: 70px;
            }
        }
        .asideBottom{
            padding-top: 80px;
            /deep/.el-menu--inline{
                line-height: 20px;
                background-color: transparent !important;
            }
            .el-menu-item,.el-submenu {
                color: #e36e4f !important;
                text-align: left;
            }
            /deep/.el-submenu__title{
                color: #e36e4f !important;
            }
            .el-submenu{
                .groupOne{
                    height: 56px;
                    padding-left: 40px;
                    
                }
                .groupOne:hover{
                    cursor: pointer;
                    background-color: hsla(0,0%,100%,.1) ;
                }
            }
            /deep/.el-submenu__title:hover,.el-menu-item:hover{
                background-color: hsla(0,0%,100%,.1) !important;
            }
            .el-menu-vertical-demo{
                background-color: transparent;
            }
            .iconfont{
                color: #e36e4f;
                margin-right: 10px;
            }
        }
    }
  
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>