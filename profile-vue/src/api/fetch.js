import axios from 'axios';
import {Message} from 'element-ui';
import store from '../store';
import Msg from '@/utils/msg'
import Cookies from 'js-cookie';

// import router from '../router';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000,                  // 请求超时时间
  withCredentials: true            //当我们把此配置项设置成默认配置项并且设置成true的时候，axios就可以设置cookies了。
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = store.getters.token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  // config.headers['withCredentials'] = true;
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data;
    console.log(res)
    console.log(response)
    if (res.code != 1) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000,
        showClose:true
      });
      return Promise.reject(new Error(res.message));
    } else {
      return response.data;
    }
  },

  error => {
    console.log(error);// for debug

    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      Msg('error',"服务器没去火星，但有错误发生： " + error.message)

    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      Msg('error',"服务器跑去火星了~： " + error.message)
    }
    console.log(error.config);

    return Promise.reject(error);
  }
)

export default service;
