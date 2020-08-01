<template>
  <div class="search-bar">
    <el-row class="container-box">
      <el-col :span="6">
        <router-link to="/">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="logo" />
        </router-link>
      </el-col>
      <el-col :span="12">
        <div class="search">
          <el-input
            placeholder="搜索商家或地点"
            v-model="searchWord"
            class="search-box"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search" class="search-btn" @click="handleClick"></el-button>
          <dl class="hot-search inputShow" v-show="isHotSearch">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotList" :key="index">
              <span @click="linkList(item)">{{ item }}</span>
            </dd>
          </dl>
          <dl class="searchList inputShow" v-show="inputing">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link to="/s/火">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotList: [],
      searchList: [],
    };
  },
  created() {
    api.getSearchHotWord().then(resp => (this.hotList = resp.data.data.slice(0, 5)));
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(() => {
        // 设置计算器的原因是点击之后就失去焦点了，失去焦点会隐藏searchList
        self.isFocus = false;
      }, 200);
    },
    input() {
      api.getSearchWordList().then(resp => this.searchList = resp.data.data.list.filter(item => item.includes(this.searchWord)));
    },
    handleClick() {
      if(this.searchWord.trim()) {
        this.$router.push("/s/" + this.searchWord);
      }
    },
    linkList(value) {
      this.$router.push("/s/" + value);
    }
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.searchWord;
    },
    inputing() {
      return this.isFocus && this.searchWord.trim();
    },
  },
};
</script>

<style type="text/css" lang="less">
.search-bar {
  background-color: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  padding: 28px 0px 85px 0px;
  .container-box {
    width: 1190px;
    margin: 0 auto;
    .logo {
      width: 126px;
      height: 46px;
      border: 0;
    }
    .search {
      position: relative;
      width: 550px;
      height: 40px;
      background: #fff;
      .search-box {
        outline: 0;
        border: 1px solid #e5e5e5;
        border-right: none;
        border-radius: 4px 0 0 4px;
        line-height: 100%;
        box-sizing: border-box;
        display: inline-block;
        font-size: 14px;
        height: 100%;
        background: transparent;
        width: 85.45%;
      }
      .search-btn {
        outline: none;
        width: 14.55%;
        box-sizing: border-box;
        line-height: 100%;
        height: 100%;
        background: #ffc300;
        border: none;
        float: right;
        color: #222222;
        cursor: pointer;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }
      .inputShow {
        position: absolute;
        left: 0;
        top: 42px;
        width: 470px;
        box-sizing: border-box;
        box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
        z-index: 100;
        color: #aaa;
        line-height: 26px;
        font-size: 14px;
        background-color: #fff;
        &.searchList {
          dd {
            line-height: 25px;
            padding: 0 10px;
            &:hover {
              background: #f8f8f8;
              a {
                width: 100%;
                height: 100%;
                display: block;
                color: #fe8c00;
              }
            }
          }
        }
        &.hot-search {
          padding: 0 10px;
          dd {
            display: inline-block;
            font-size: 12px;
            span {
              margin-right: 10px;
              cursor: pointer;
              &:hover {
                color: #fe8c00;
              }
            }
          }
        }
      }
    }
  }
}
</style>