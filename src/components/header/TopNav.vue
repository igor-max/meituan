<template>
  <ul class="top-nav">
    <li class="nav" @mouseenter="enterMy" @mouseleave="leaveMy">
      <router-link to="/">我的美团</router-link>
      <ul class="subnav" v-if="isShowMy">
        <li>
          <router-link to="/">我的订单</router-link>
        </li>
        <li>
          <router-link to="/">我的收藏</router-link>
        </li>
        <li>
          <router-link to="/">抵用券</router-link>
        </li>
        <li>
          <router-link to="/">账户设置</router-link>
        </li>
      </ul>
    </li>
    <li class="nav">
      <router-link to="/">手机APP</router-link>
    </li>
    <li class="nav" @mouseenter="enterStore" @mouseleave="leaveStore">
      商家中心
      <ul class="subnav maxWidth" v-if="isShowStore">
        <li>
          <router-link to="/">美团餐饮商户中心</router-link>
        </li>
        <li>
          <router-link to="/">登录商家中心</router-link>
        </li>
        <li>
          <router-link to="/">美团智能收银</router-link>
        </li>
        <li>
          <router-link to="/">我想合作</router-link>
        </li>
        <li>
          <router-link to="/">手机免费开店</router-link>
        </li>
        <li>
          <router-link to="/">餐饮代理商招募</router-link>
        </li>
        <li>
          <router-link to="/">商家申请开票</router-link>
        </li>
        <li>
          <router-link to="/">免费合作美团排队</router-link>
        </li>
      </ul>
    </li>
    <li class="nav" @mouseenter="enterRules" @mouseleave="leaveRules">
      美团规则
      <ul class="subnav" v-if="isShowRules">
        <li>
          <router-link to="/">规则中心</router-link>
        </li>
        <li>
          <router-link to="/">规则目录</router-link>
        </li>
        <li>
          <router-link to="/">规则评议院</router-link>
        </li>
      </ul>
    </li>
    <li class="nav">网站导航</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      isShowMy: false,
      isShowStore: false,
      isShowRules: false,
    };
  },
  methods: {
    enterMy() {
      this.isShowMy = true;
    },
    leaveMy() {
      this.isShowMy = false;
    },
    enterStore() {
      this.isShowStore = true;
    },
    leaveStore() {
      this.isShowStore = false;
    },
    enterRules() {
      this.isShowRules = true;
    },
    leaveRules() {
      this.isShowRules = false;
    },
  },
};
</script>

<style lang="less">
.top-nav {
  height: 100%;
  float: right;
  .nav {
    float: left;
    position: relative;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-sizing: border-box;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    a {
      color: #999;
    }
    &:hover {
      color: #fe8c00;
      background-color: #fff;
      border-color: #e5e5e5;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      > a {
        color: #fe8c00;
      }
    }
    .subnav {
      position: absolute;
      top: 40px;
      right: 0;
      background-color: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      z-index: 100;
      padding: 0 14px;
      text-align: center;
      line-height: 34px;
      &.maxWidth {
        width: 128%;
      }
      a:hover {
        color: #fe8c00;
      }
    }
  }
}
</style>