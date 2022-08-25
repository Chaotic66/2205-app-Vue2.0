import axios from "axios";

let http = axios.create({
    baseURL:'/api',
    timeout:5000, ////超时设置
    withCredentials:true, ////携带本地平局 

})


////配置全局拦截    对接口的请求进行统一处理

axios.interceptors.request.use(config =>{
    ////config就是所有的请求配置
    return config   //!放行   如果不return那么不能真正的将请求发出
})


////配置相应拦截    对错误进行统一处理

axios.interceptors.request.use(config =>{
    ////config就是所有的请求配置
    return config   //!放行   如果不return axios请求就拿不到响应数据
})


export default http
