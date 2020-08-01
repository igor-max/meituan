<template>
  <div class="menu">
    <dl class="all" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(menu, index) in menuList" :key="index" @mouseenter="menuEnter(menu)">
        <router-link to="/">{{ menu.name }}</router-link>
      </dd>
    </dl>
    <div
      class="currentDetail"
      v-if="currentDetail"
      @mouseenter="detailEnter"
      @mouseleave="detailDetail"
    >
      <div v-for="(item, index) in currentDetail.items" :key="index" class="item">
        <div class="title">{{ item.title }}</div>
        <router-link v-for="(val, i) in item.items" :key="i" class="content" to="/">{{ val }}</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import api from "@/api/index.js";
export default {
  data() {
    return {
      currentDetail: null,
      timer: null,
      menuList: [],
    };
  },
  created() {
    api.getMenuList().then(resp => this.menuList = resp.data.data);
  },
  methods: {
    menuEnter(menu) {
      this.currentDetail = menu;
    },
    menuLeave() {
      this.timer = setTimeout(
        function () {
          this.currentDetail = null;
        }.bind(this),
        200
      );
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailDetail() {
      this.currentDetail = null;
    },
  },
};
</script>

<style type="text/css" lang="less">
.menu {
  position: relative;
  width: 230px;
  height: 475px;
  background-color: #fff;
  margin-top: -50px;
  border: 1px solid #e5e5e5;
  .all {
    dt {
      padding: 21px 15px;
      box-sizing: border-box;
      font-weight: bold;
    }
    dd {
      line-height: 26px;
      font-size: 13px;
      color: #646464;
      padding: 0 15px;
      box-sizing: border-box;
      &:hover {
        cursor: pointer;
        background: rgba(255, 150, 0, 0.08);
        color: #222222;
        font-weight: bold;
      }
    }
  }
  .currentDetail {
    position: absolute;
    top: 60px;
    left: 230px;
    width: 400px;
    height: 416px;
    padding: 10px 30px 0px 30px;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 100;
    color: #666;

    .title {
      padding: 15px 0px;
      box-sizing: border-box;
      margin-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
      color: #222;
    }
    .content {
      margin-bottom: 10px;
      display: inline-block;
      font-size: 12px;
      color: #999;
      margin-right: 10px;

      &:hover {
        color: #fe8c00;
      }
    }
  }
}
</style>
