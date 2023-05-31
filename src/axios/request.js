import axios from "axios";

import nprogress from "nprogress";
import "nprogress/nprogress.css"

//1 利用axios对象的方法create, 去创建一个axios实例
//2 requests就是axios, 只不过配置了一下

const requests = axios.create({
    //配置对象
    baseURL: "/api",
    timeout: 5000
})

//请求拦截器: 在发请求之前, 请求拦截器可以检测到
requests.interceptors.request.use((config) => {
    //config配置对象,对象里面有一个属性很重要, headers请求头
    nprogress.start();
    return config;
})

//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
    (res) => {
        //相应成功做的事情
        nprogress.done();
        return res.data;
    },
    (err) => {
        alert("服务器响应数据失败");
    }
);

//这里的代码是暴露一个axios实例
export default requests;