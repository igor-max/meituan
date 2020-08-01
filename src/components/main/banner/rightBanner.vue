<template>
  <div class="rightBanner">
    <nav class="nav">
      <router-link href="#" v-for="(item, index) in navList" :key="index" to="/">{{ item }}</router-link>
    </nav>
    <div class="banner-pic clearfix">
      <slider />
      <div class="link">
        <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
      </div>
      <div class="banner-login">
        <div class="hello">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
        </div>
        <p>Hi！{{ this.$store.state.username ? this.$store.state.username : '你好' }}</p>
        <div class="login" v-if="!this.$store.state.username">
          <router-link to="/register">
            <el-button round>注册</el-button>
          </router-link>
          <router-link to="/login">
            <el-button round>立即登录</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="banner-pic clearfix">
      <a href="#" class="link-pic">
        <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt />
      </a>
      <a href="#" class="link-pic">
        <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />
      </a>
      <a href="#" class="link-pic other">
        <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt />
      </a>
      <div class="download-app">
        <div class="code">
          <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
        </div>
        <p class="app-name">美团APP手机版</p>
        <p class="money">
          <span>1元起</span>
          吃喝玩乐
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import slider from "./slider.vue";
export default {
  data() {
    return {
      navList: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿／公寓",
        "商家入驻",
        "美团公益",
      ],
    };
  },
  components: {
    slider,
  },
};
</script>

<style type="text/css" lang="less">
.rightBanner {
  position: relative;
  padding: 10px 0;
  box-sizing: border-box;
  .nav {
    position: absolute;
    left: 0px;
    top: -30px;
    a {
      color: #222;
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
      cursor: pointer;
    }
    a:hover {
      color: #fbc700;
    }
  }
  .banner-pic {
    .link {
      float: left;
      width: 150px;
      height: 240px;
      margin: 0 10px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .link-pic {
      width: 270px;
      height: 165px;
      float: left;
      margin: 10px 10px 0px 0px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .other {
      width: 150px;
      height: 165px;
    }
    .download-app {
      float: left;
      width: 220px;
      height: 165px;
      margin-top: 10px;
      padding-top: 10px;
      box-sizing: border-box;
      text-align: center;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      .code img {
        width: 95px;
        height: 95px;
      }
      .app-name {
        font-size: 16px;
        color: #222222;
        font-weight: 500;
      }
      .money {
        font-size: 12px;
        font-weight: 500;
        margin-top: 2px;
        span {
          color: #ec5330;
        }
      }
    }
  }
  .banner-login {
    float: left;
    width: 222px;
    height: 240px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    text-align: center;
    padding-top: 30px;
    .hello {
      margin: 0px auto 4px auto;
      img {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 4px solid #e5e5e5;
      }
    }
    .el-button {
      display: block;
      margin: 10px auto 15px auto;
    }
  }
}
</style>

