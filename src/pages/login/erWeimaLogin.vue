<template>
    <div class="erWeima" >
        <h1 class="verCode">微信扫码登入</h1>
        <img class="ewmImg" :src=imgSrc alt="">
        <p class="ewmTip">{{tips}}</p>
    </div>

</template>



<script>
    import { mapState } from 'vuex'
    
    export default {
        data(){
            return{
                imgSrc:'//qr.m.jd.com/show?appid=133&size=147&t=1661313164352',
                tips:'请使用手机微信扫码，加入战场!',
                
            }
        },
        methods:{
            
        },
        computed:{
            ...mapState('erWeimaLogin',['flag'])
        },
        mounted(){
            console.log(this.flag);
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