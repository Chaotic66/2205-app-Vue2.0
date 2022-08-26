import http from '../utils/request'

////获取验证码
export let getCapcha = () => http.get('/users/getCaptcha?v=next')

////校验 验证码
export let verifyCapcha = (captcha) => http.get('/users/verifyCaptcha',{
    params:{
        captcha
    }
})

////常规登录
export let normalLogin = (username,password) => http.post('/users/login',{
    username,
    password
})

////获取微信二维码
export let getEwm = (sid) => http.get('/users/getQrcode',{
    params:{
        sid
    }
})

////微信登录
export let loginWechat = (wechatCode) => http.get('/users/wechatLogin',{
    params:{
        wechatCode
    }
})


////获取手机验证码
export let getphoneCode = (phoneNumber) => http.post('/sms/send',{
        phoneNumber  
})

////手机验证码登录 
export let codeLogin = (code) => http.post('/users/login?type=sms',{
    code  
})