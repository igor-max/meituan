<template>
  <div class="top-bar">
    <div class="containerBox clearfix">
      <el-col :span="14">
        <top-left />
      </el-col>
      <el-col :span="10">
        <top-nav />
      </el-col>
    </div>
  </div>
</template>

<script type="text/javascript">
import topNav from "./TopNav.vue";
import topLeft from "./TopLeft.vue";
export default {
  components: {
    topLeft,
    topNav,
  },
};
</script>

<style type="text/css" lang="less">
.top-bar {
  background-color: #f8f8f8;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  color: #999;
  .containerBox {
    width: 1190px;
    margin: 0 auto;
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
}
</style>