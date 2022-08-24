import axios from "axios";

//!配置axios默认基础地址
axios.defaults.baseURL = '/api'

export const getEwm = ()=> axios.get('/users/getQrcode')