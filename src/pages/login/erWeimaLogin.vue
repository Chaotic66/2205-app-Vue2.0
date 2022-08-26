<template>
    <div class="erWeima" >
        <h1 class="verCode">微信扫码登入</h1>
        <img class="ewmImg" :src=imgSrc alt="">
        <!-- ////遮罩 -->
        <p class="msk" v-if=flag2>
            <!-- ////失效图片 -->
            <img src="../../assets/img/123.png" alt="" v-if=invalidFlag @click=reGetewm>
            <!-- ////扫码成功图片 -->
            <svg class="icon sucScanning" aria-hidden="true" v-if=scanFlag @click=reGetewm>
                <use xlink:href="#icon-jiaoyi"></use>
            </svg>
        </p>
        
        <p class="ewmTip">{{tips}}</p>
    </div>

</template>



<script>
    import { mapState } from 'vuex'
    import imgOut from '@/assets/img/wechatimg.png'

    import * as api from '@/api/users'
    import socketIo from 'socket.io-client'
    import qrcode from 'qrcode'
    import storage from '@/utils/storage'
    export default {
        data(){
            return{
                imgSrc:imgOut,
                tips:'请使用手机微信扫码，加入战场!',
                flag2:false,
                scanFlag:false,
                invalidFlag:false,

            }
        },
        methods:{
            ////生成二维码方法
          async  getEwmCode(sid){

            let res = await api.getEwm(sid)
            
            let {scanCodeUrl,state} = res.data
            if(state){
                //!  通过qr插件转码
                qrcode.toDataURL(scanCodeUrl,(err,img) =>{
                    if(err){
                        throw err
                    }
                    this.imgSrc = img
                })

            }
               
            },
            reGetewm(){
                let newSid = storage.get('qf-sid')
                this.getEwmCode(newSid)
                this.flag2 = false
                this.scanFlag = false,
                this.invalidFlag = false
                // console.log(newSid);
            }
        },
        computed:{
            ...mapState('erWeimaLogin',['flag'])
        },
        mounted(){
            if(this.flag){
                //!  建立socket连接
                let io = socketIo('wss://chst.vip')
                //!  监听连接事件
                io.on('connectSuccess',({state,sid})=>{
                    if(state){
                        storage.set('qf-sid',sid)
                        ////调用生成二维码方法
                        this.getEwmCode(sid)
                    }
                })

                io.on('invalidCode',({state})=>{
                    // console.log('shuju',data);
                    if(!state){
                        this.flag2 = true
                        this.invalidFlag = true
                        // console.log('123');
                    }
                })

                io.on('scancodeSuccess',({wechatCode,state})=>{
                    // console.log(res);
                    if(state){
                        this.flag2 = true,
                        this.scanFlag = true
                        api.loginWechat(wechatCode)
                        .then(res=>{
                            console.log(res);
                            //!远程校验通过，存数据
                            storage.set('token',res.data.token)
                            storage.set('userInfo',res.data.userInfo)
                            storage.set('permission',res.data.permission)
                            //!远程校验通过，跳转
                            this.$router.push('/home')
                        })

                    }
                })

            }
            // setTimeout(()=>{
            //     this.flag2 = true
            //     this.tips = '请点击二维码刷新'
            // },3000)
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
                cursor: pointer;
                align-items: center;
                img{
                    height: 100px;
                    width: 100px;
                }
                .sucScanning{
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    svg{
                        z-index: 9999;
                    }
                }
            }
                
            ////提示
            .ewmTip{
                font-size: 20px;                
                background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
                background-clip: text;
                // 兼容 -webkit-background-clip: text;
                color: transparent;
            }
        }

</style>