<template>
    <div class="contain">
        <div class="bcg">
            <video  autoplay loop  muted>
                <source src="../../assets/vedio/1900x900-2.mp4">
            </video>
        </div>
        <div class="login" >
            <h1 class="title">立即加入战场!</h1>   
            <!-- //! 二维码 -->
            <i class="iconfont icon-erweima" @click='changeEwm' v-if='flag===1'></i>     
            <i class="iconfont icon-diannao" @click='changeCommon' v-else-if='flag===2'></i> 
            <i class="iconfont icon-diannao" @click='changeCommon' v-else-if='flag===3'></i>     
            <!-- //! 登录-->
            <div class="commonlogin" v-if="flag===1">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item class="userSec" label="用户名" prop="username">
                        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="captcha">
                        <el-input type="text" v-model.number="ruleForm.captcha"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button  type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                    
                </el-form>
                <div class="mobileLogin">
                    <i class="iconfont icon-shouji"></i>
                    <div  class="mobileContent" @click='changeMobile'>切换短信登入</div>
                </div>
            </div>
            
            <!-- //! 二维码 -->
            <div class="erWeima" v-else-if='flag===2'>
                <h1 class="verCode">微信扫码登入</h1>
            </div>

            <!-- //! 手机登录 -->
            <div class="mobileContain" v-else-if='flag===3'>
                <h1 class="verCode">短信登录</h1>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号" prop="mobileNum">
                        <el-input type="text" v-model="ruleForm.mobileNum" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="captcha">
                        <el-input type="text" v-model.number="ruleForm.captcha"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button  type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                    
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

    ////用户名：只能包括数字字母的组合，长度为4-15位
    var validateUsername = (rule, value, callback) => {
        
        let reg = /^[A-Za-z0-9]{3,15}$/;
        if(reg.test(value)){
            callback()
        }else{
            callback('不会好好写名字？')
        }

      };
    ////验证密码
    var vvalidatePassword = (rule, value, callback) => {

        if(value){
            callback()
        }else{
            callback('不会输密码？')
        }

      };
    ////验证 验证码
    var vvalidateCaptcha = (rule, value, callback) => {


      };
    ////验证 手机号
    var vvalidateMobileNum = (rule, value, callback) => {
        let reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
        if(reg.test(value)){
            callback()
        }else{
            callback('不会好好写手机号？')
        }
      };
    





  export default {
    data() {
      
      return {
        ruleForm: {
          username: '',
          password: '',
          captcha: '',
          mobileNum:''
          

        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: vvalidatePassword, trigger: 'blur' }
          ],
          captcha: [
            { validator: vvalidateCaptcha, trigger: 'blur' }
          ],
          mobileNum:[
            { validator: vvalidateMobileNum, trigger: 'blur' }
          ]

        },
        flag:1,
        flag2:true

      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
            
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeCommon(){
        ////显示登录窗口
        this.flag = 1
      },
      changeEwm(){
        ////切换二维码登录
        this.flag = 2
      },
      changeMobile(){
        ////切换短信登录
        this.flag = 3
      },
      
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
        ////二维码界面
        .erWeima{
            .verCode{
                // 渐变色字体
                background-image: linear-gradient(to right,#faed00,gold);
                background-clip: text;
                // 兼容 -webkit-background-clip: text;
                color: transparent;
                text-align: center;
                text-shadow: 0 0 10px white,0 0 50px white;
            }
        }
        ////手机登录页面
        .mobileContain{
            .verCode{
                // 渐变色字体
                background-image: linear-gradient(to right,#faed00,gold);
                background-clip: text;
                // 兼容 -webkit-background-clip: text;
                color: transparent;
                text-align: center;
                text-shadow: 0 0 10px white,0 0 50px white;
            }
        }
        ////切换短信登入
        .mobileLogin{
            height: 26px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon-shouji{
                font-size: 30px;
                animation: blink 2s linear infinite;
            }
            .mobileContent{
                cursor: pointer;
            }
        }
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
    ////字体动画
    @keyframes blink {
        0%{
            color:red
        }
        15%{
            color: orangered;
        }
        30%{
            color: yellow;
            transform: scale(0.7);
        }
        45%{
            color:green;
            
        }
        60%{
            color: aqua;
        }
        75%{
            color: blue;
            transform: scale(1.3);
        }
        90%{
            color: purple;
        }
        100%{
            color: black;
        }
    }
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
            height: 100%;
            // width: 100%;
        }
    }


</style>