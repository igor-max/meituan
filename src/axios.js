import axios from "axios";

axios.defaults.baseURL = "http://api.duyiedu.com";

axios.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        appkey: "igor_1583119679665"
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axios;
