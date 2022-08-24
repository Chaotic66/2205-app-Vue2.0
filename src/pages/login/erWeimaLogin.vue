<template>
    <div class="erWeima" >
        <h1 class="verCode">微信扫码登入</h1>
        <img class="ewmImg" :src=imgSrc alt="">
        <p class="msk" v-if=flag>
            <img src="../../assets/img/123.png" alt="">
        </p>
        <p class="ewmTip">{{tips}}</p>
    </div>

</template>



<script>
    import { mapState } from 'vuex'
    import imgOut from '@/assets/img/wechatimg.png'
    export default {
        data(){
            return{
                imgSrc:imgOut,
                tips:'请使用手机微信扫码，加入战场!',
                flag:false
            }
        },
        methods:{
            
        },
        computed:{
            ...mapState('erWeimaLogin',['flag'])
        },
        mounted(){
            console.log(this.flag);
            setTimeout(()=>{
                this.flag = true
            },3000)
        }
    }



</script>





<style lang='less' scoped>
    ////二维码登录页面
        .erWeima{
            display: flex;
            flex-direction: column;
            align-items: center;
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
            ////二维码图片
            .ewmImg{
                width: 150px;
                height: 150px;
            }
            .msk{
                height: 150px;
                width: 150px;
                position: absolute;
                bottom:185px;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    
                    height: 100px;
                    width: 100px;
                }
            }
            ////提示
            .ewmTip{
                font-size: 20px;
                background-image: linear-gradient(to right,green,red,skyblue);
                background-clip: text;
                // 兼容 -webkit-background-clip: text;
                color: transparent;
            }
        }

</style>