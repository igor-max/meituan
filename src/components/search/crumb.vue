<template>
  <div class="crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $store.state.position }}美团</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">{{ $route.params.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
.crumb {
    padding: 10px 0;
    .el-breadcrumb {
        font-size: 12px;
        .el-breadcrumb__item span:hover {
            color: #f40;
            cursor: pointer;
        }
    }
}
</style>