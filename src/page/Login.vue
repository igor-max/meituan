<template>
  <div class="login-page">
    <div class="header">
      <router-link to="/">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" alt />
      </router-link>
    </div>
    <div class="login-wrap clearfix">
      <div class="login-banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="login">
        <div :class="{error: true, isErr: isErr}">{{ errInfo }}</div>
        <div class="login-mode">
          账号登录
          <span>手机动态码登录</span>
        </div>
        <el-input class="login-type" placeholder="+86 > 手机号" v-model="userName"></el-input>
        <el-input
          class="login-type"
          placeholder="密码"
          prefix-icon="el-icon-goods"
          v-model="password"
        ></el-input>
        <p class="forget-password">忘记密码？</p>
        <el-button type="primary" class="submit" @click="submit">登入</el-button>
        <p class="register">
          还没有账号？
          <router-link to="/register">免费注册</router-link>
        </p>
      </div>
    </div>
    <div class="footer">
      <nav class="footer-nav clearfix">
        <router-link to="/">关于美团</router-link>
        <router-link to="/">加入我们</router-link>
        <router-link to="/">商家入驻</router-link>
        <router-link to="/">帮助中心</router-link>
        <router-link to="/">美团手机版</router-link>
      </nav>
      <p class="footer-bottom">©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </div>
  </div>
</template>

<script type="text/javascript">
import api from "@/api/index.js";
export default {
  data() {
    return {
      isErr: false,
      errInfo: "",
      userName: "",
      password: "",
    };
  },
  methods: {
    submit() {
      if (!this.userName.trim()) {
        this.errInfo = "用户名不能为空";
        return;
      } else if (!this.password) {
        this.errInfo = "密码不能为空";
        return;
      } else if (this.password.length < 6) {
        this.errInfo = "密码必须大于6位";
        return;
      }
      api
        .login({
          params: {
            userName: this.userName,
            password: this.password,
          },
        })
        .then((resp) => {
          if (resp.data.status === "success") {
            alert(resp.data.msg);
            this.$store.commit("setUserName", this.userName);
            this.$router.push("/");
          } else if (resp.data.status === "fail") {
            this.errInfo = resp.data.msg;
          }
        });
    },
  },
  watch: {
    ["errInfo"]() {
      this.isErr = true;
    },
  },
};
</script>

<style lang="less">
.login-page {
  width: 980px;
  margin: 0 auto;
  .header {
    margin: 40px auto 30px;
    a,
    img {
      width: 130px;
      height: 47px;
    }
  }
  .login-wrap {
    margin-bottom: 70px;
    .login-banner {
      float: left;
      height: 370px;
      margin: 0 115px 0 0;
      width: 480px;
    }
    .login {
      float: left;
      width: 270px;
      background: #fff;
      .error {
        visibility: hidden;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        box-sizing: border-box;
        border: 1px solid #f5d8a7;
        border-radius: 2px;
        background: #fff6db;
        font-size: 12px;
        margin-bottom: 10px;
        &.isErr {
          visibility: visible;
        }
      }
      .login-mode {
        color: #666;
        font-size: 14px;
        padding: 2px 0;
        span {
          float: right;
          font-size: 12px;
        }
      }
      .login-type {
        margin: 8px 0;
        input {
          border-radius: 0;
          height: 35px;
          line-height: 35px;
          border: 1px solid #aaa;
          &:focus {
            border-color: #ffc300;
          }
        }
      }
      .forget-password {
        text-align: right;
        color: #fe8c00;
        font-size: 12px;
        padding-bottom: 8px;
        cursor: pointer;
      }
      .submit {
        width: 100%;
        margin: 8px 0;
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        outline: none;
        border: none;
      }
      .register {
        font-size: 14px;
        a {
          color: #fe8c00;
        }
      }
    }
  }
  .footer {
    margin: 0 auto 30px;
    font-size: 12px;
    color: #999;
    .footer-nav {
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      a {
        float: left;
        margin: 5px 0;
        padding: 0 16px;
        line-height: 14px;
        border-right: 1px solid #eee;
      }
    }
  }
}
</style>