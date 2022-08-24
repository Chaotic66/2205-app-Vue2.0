<template>
    <div class="commonlogin" >
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
    export default {
        props:['mobile'],
        data() {
            return {
                ruleForm: {
                username: '',
                password: '',
                captcha: '',
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
                },

            };
        },
        methods:{
            changeMobile(){
                ////切换短信登录
                this.$emit('custom','mobileLogin')
            },
        },
       
    }


</script>

<style lang='less' scoped>
    .commonlogin{
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


</style>