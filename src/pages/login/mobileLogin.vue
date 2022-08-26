<template>
    <div class="mobileContain" >
        <h1 class="verCode">短信登录</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="mobileNum">
                <el-input type="text" v-model="ruleForm.mobileNum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" >
                <el-input type="text" v-model="code"></el-input>
            </el-form-item>
            <el-form-item class="getCode" >
                <span v-html='codeText' @click=getCode  >获取验证码</span>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click=codLog>提交</el-button>
            </el-form-item>           
        </el-form>
    </div>

</template>


<script>
    import * as api from '@/api/users'
    import storage from '@/utils/storage'
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
                codeText:'获取验证码',
                codeFlag:true,
                code:''
            }
        },
        methods:{
           async getCode(){
                ////处理防抖
                if(this.codeFlag){
                    this.codeFlag = false
                    let timeout = 60
                    this.codeText = `${timeout}秒后重新发送`
                    let res = await api.getphoneCode(this.ruleForm.mobileNum)
                    
                    ////倒计时
                    let interval= setInterval(()=>{
                        timeout--
                        this.codeText = `${timeout}秒后重新发送`
                        ////关闭计时器并打开按钮
                        if(timeout<1){
                            clearInterval(interval)
                            this.codeText = '获取验证码'
                            this.codeFlag = true
                        }
                      
                    },1000)
                }
            },
           async codLog(){
                let res = await api.codeLogin(this.code)
                console.log(res);
                if(res.data.state){
                    this.$router.push('/home')
                    storage.set('token',res.data.token)
                    storage.set('userInfo',res.data.userInfo)
                    storage.set('permission',res.data.permission)
                }
            }
        }
       
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
                    user-select: none;
                }
            }   
        }

</style>