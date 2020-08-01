import axios from "@/axios.js";

export default {
    getSearchHotWord(params) {
        return axios.get("/api/meituan/header/searchHotWords.json", params);
    },
    getSearchWordList() {
        return axios.get("/api/meituan/header/search.json");
    },
    getMenuList() {
        return axios.get("/api/meituan/index/nav.json");
    },
    // 首页下方展示区域
    getResultsByKeywords() {
        return axios.get("/api/meituan/index/resultsByKeywords.json")
    },
    getHotCityList() {
        return axios.get("/api/meituan/city/hot.json");
    },
    getRecentsCity() {
        return axios.get("/api/meituan/city/recents.json");
    },
    getProvince() {
        return axios.get("/api/meituan/city/province.json");
    },
    login(param) {
        return axios.get("/api/meituan/login", param);
    },
    register(param) {
        return axios.get("/api/meituan/register", param);
    }
}