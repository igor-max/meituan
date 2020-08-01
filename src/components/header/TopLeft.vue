<template>
  <div class="position">
    <i class="el-icon-location" />
    {{ $store.state.position }}
    <router-link :to="{name: 'changeCity'}">切换城市</router-link>[
    <a href="#">南昌</a>
    <a href="#">抚州</a>
    <a href="#">东乡</a>
    ]
    <div class="user" v-if="!$store.state.username">
      <router-link :to="{name: 'login'}" class="active">立即登录</router-link>
      <router-link :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>

<style type="text/css" lang="less" scoped>
div a {
  padding: 0 5px;
}

div a:hover,
.active {
  color: #fe8c00;
}

.user {
	display: inline-block;
}
</style>
