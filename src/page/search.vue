<template>
  <div class="search-page">
    <el-row>
      <crumb />
    </el-row>
    <el-row>
      <search-container />
    </el-row>
    <el-row>
    </el-row>
  </div>
</template>

<script>
import crumb from "@/components/search/crumb.vue";
import searchContainer from "@/components/search/searchContainer/index.vue";

export default {
  components: {
    crumb,
    searchContainer
  },
};
</script>

<style type="text/css" lang="less">
.search-page {
  width: 1190px;
  margin: 0 auto;
  padding-top: 10px;
  .title {
    margin: 10px 0;
    color: #222;
    font-size: 12px;
    .mt-position {
      position: relative;
      margin-right: 13px;
    }
    .mt-position::before {
      content: "";
      position: absolute;
      top: 5px;
      right: -8px;
      display: inline-block;
      width: 4px;
      height: 4px;
      border-right: 1px solid #222;
      border-top: 1px solid #222;
      transform: rotate(45deg);
    }
    a:hover {
      color: #fe8c00;
    }
  }
}
</style>