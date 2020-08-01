<template>
  <div class="page-default">
    <el-container>
      <!-- header -->
      <el-header height>
        <default-header />
      </el-header>
      <!-- main -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- footer -->
      <el-footer class="my-footer" height>
        <default-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import defaultHeader from "@/components/header/index.vue";
import defaultFooter from "@/components/footer/index.vue";
export default {
  components: {
    defaultHeader,
    defaultFooter,
  },
};
</script>

<style lang="less">
main.el-main {
  background-color: #eee;
  padding: 0;
  overflow: visible;
}

footer.my-footer {
  padding: 0;
  background-color: #eee;
}
</style>