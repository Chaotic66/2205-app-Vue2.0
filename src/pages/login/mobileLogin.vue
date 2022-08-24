<template>
    <div class="mobileContain" >
        <h1 class="verCode">短信登录</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="mobileNum">
                <el-input type="text" v-model="ruleForm.mobileNum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
                <el-input type="text" v-model.number="ruleForm.captcha"></el-input>
            </el-form-item>
            <el-form-item class="getCode"  >
                <span>获取验证码</span>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>           
        </el-form>
    </div>

</template>


<script>
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
        data(){
            return{
                ruleForm:{
                    mobileNum:''
                },
                rules: {
                    mobileNum:[
                        { validator: vvalidateMobileNum, trigger: 'blur' }
                    ]

                },
            }
        },
       
    }




</script>



<style lang='less' scoped>
    ////手机登录页面
        .mobileContain{
            position: relative;
            .verCode{
                // 渐变色字体
                background-image: linear-gradient(to right,#faed00,gold);
                background-clip: text;
                // 兼容 -webkit-background-clip: text;
                color: transparent;
                text-align: center;
                text-shadow: 0 0 10px white,0 0 50px white;

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
            
            ////获取验证码
            /deep/.getCode{
                position: absolute;
                right: 60px;
                bottom: 80px;
                color: rgb(136, 136, 136) !important;
                text-decoration: underline;
                span{
                    display: block;
                    cursor: pointer;
                }
            }   
        }

</style>