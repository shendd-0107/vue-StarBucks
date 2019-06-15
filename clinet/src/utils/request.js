import axios from "axios"
import Router from "../router/index"
const request = axios.create({
    baseURL:"http://localhost:3000"
})
//请求之前的拦截器
request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem("token")
        }
    }
},(error)=>{
    return Promise.reject(error);
})
//响应之前的拦截器
request.interceptors.response.use((res)=>{
    return res.data;
},(error)=>{
    const status = error.response.status;
    if(status>400){
        switch(status){
            case 401:
                Router.push("/login");
            break;
            case 403:
                new Vue().$alerts("没有权限")
            break;
            case 404:
                new Vue().$alerts("页面走丢了")
            break;
        }
    }
    return Promise.reject(error);

})

export default {
    get(url,data){
        return request.get(url,{params:data})
    },
    post(url,data){
        return request.post(url,data)
    }
}

// export default request;