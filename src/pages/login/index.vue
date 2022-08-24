<template>
    <div class="contain">
        <div class="bcg">
            <video  autoplay loop muted>
                <source src="../../assets/vedio/阿狸翻跳.mp4">
            </video>
        </div>
        <div class="login" >
            <h1 class="title">3秒注册,立即加入战场!</h1>   
            <!-- //! 二维码 -->
            <!-- <i class="iconfont icon-erweima" @click='changeEwm' v-if='flag===1'></i>     -->
            <svg class="icon icon-erweima" aria-hidden="true" @click='changeEwm' v-if='flag===1'>
                <use xlink:href="#icon-erweimajiaobiao"></use>
            </svg> 
            <svg class="icon icon-diannao" aria-hidden="true" @click='changeCommon' v-else-if='flag===2'>
                <use xlink:href="#icon-diannaojiaobiao"></use>
            </svg> 
            <svg class="icon icon-diannao" aria-hidden="true" @click='changeCommon' v-else-if='flag===3'>
                <use xlink:href="#icon-diannaojiaobiao"></use>
            </svg> 
            <!-- <i class="iconfont icon-diannao" @click='changeCommon' v-else-if='flag===2'></i>  -->
            <!-- <i class="iconfont icon-diannao" @click='changeCommon' v-else-if='flag===3'></i>  -->
            <!-- //! 登录-->
            <div class="tab" :is='sel'  @custom='changeWindow'></div>
            
            <!-- //! 二维码 -->
            

            <!-- //! 手机登录 -->

        </div>
    </div>
</template>

<script>
    import commonLogin from '@/pages/login/commonLogin'
    import erWeimaLogin from '@/pages/login/erWeimaLogin'
    import mobileLogin from '@/pages/login/mobileLogin'
    import { mapMutations } from 'vuex'

  export default {
    components:{
        commonLogin,
        erWeimaLogin,
        mobileLogin
    },
    data() {
      
      return {
        flag:1,
        arr:['commonLogin','erWeimaLogin','mobileLogin'],
        sel:'commonLogin',
        falg2:true
      };
    },
    methods: {
        ...mapMutations('erWeimaLogin',['GET_FLAG']),
      
      changeCommon(){
        ////显示登录窗口
        this.flag = 1
        this.sel = 'commonLogin'
      },
      changeEwm(){
        ////切换二维码登录
        this.flag = 2
        this.sel='erWeimaLogin'
        this.GET_FLAG(this.falg2)
      },
      ////接收
      changeWindow(input){
        this.sel=input
        this.flag = 2
      }
    }
  }
</script>

<style lang='less' scoped>
    
    .login{
        width: 400px;
        height: 600px;
        position: absolute;
        right: 80px;
        bottom: 34px;
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 5%;
        box-shadow: 0 0px 100px 20px rgb(0 0 0 / 70%);
        .icon-erweima{
            font-size: 60px;
            // color: #fff;
            position: absolute;
            right: -1px;
            top: -1px;
            cursor: pointer;
            opacity: .7;
            animation: blink 2s linear infinite;
        }
        .icon-diannao{
            font-size: 60px;
            // color: #fff;
            position: absolute;
            right: -1px;
            top: -1px;
            cursor: pointer;
            opacity: .7;
            animation: blink 2s linear infinite;
        }
        ////标题
        .title{
            color: aliceblue;
            margin-top: 100px;
            margin-bottom: 4 0px;
            text-align: center;
            animation: blink 2s linear infinite;
        }
        ////用户名输入框
        .el-input{
            /deep/.el-input__inner {
                width: 250px !important;
            }
        }
        ////提交按钮
        /deep/.el-button{
            margin-top: 20px;
            width: 250px !important;
            height: 40px !important;
            animation: bcgBlink 2s linear infinite;
            border: none;
            
        }
        ////用户名文字
        /deep/.el-form-item__label{
                color: white !important;
        }
    }

     ////背景
    .bcg{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        video{
            // height: 100%;
            width: 100%;
        }
    }
    

</style>

<style lang='less'>
    ////背景动画
     @keyframes bcgBlink {
        0%{
            background-color:red
        }
        15%{
            background-color: orangered;
        }
        30%{
            background-color: yellow;
        }
        45%{
            background-color:green;
            
        }
        60%{
            background-color: aqua;
        }
        75%{
            background-color: blue;
        }
        90%{
            background-color: purple;
        }
        100%{
            background-color: black;
        }
    }
   

    ////字体颜色
    @keyframes blink {
        0%{
            color:red;
            text-shadow: 0 0 100px red;
        }
        15%{
            color: orangered;
            text-shadow: 0 0 100px orangered;
        }
        30%{
            color: yellow;
            text-shadow: 0 0 100px yellow;
            transform: scale(0.7);
        }
        45%{
            color:green;
            text-shadow: 0 0 100px green;
        }
        60%{
            color: aqua;
            text-shadow: 0 0 100px aqua;
        }
        75%{
            color: blue;
            text-shadow: 0 0 100px blue;
            transform: scale(1.2);
        }
        90%{
            color: purple;
            text-shadow: 0 0 100px purple;
        }
        100%{
            color: black;
            text-shadow: 0 0 100px black;
        }
    }

   

</style>