import axios from 'axios'
const request = axios.create({
    // 后台地址
    baseURL: '' 
})
export default {
    login(params) { // 登录
        return fetch.post('v/user/login', params);
    },
    signUp(params) { // 注册
        return fetch.post('v/user/signUp', params);
    },
}
 