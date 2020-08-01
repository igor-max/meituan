<template>
  <div class="page-main">
    <el-row>
      <el-col :span="5" class="position">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <rightBanner />
      </el-col>
    </el-row>
    <el-row>
      <scenes :nav="hasStyle" />
      <scenes :nav="hasStyle" />
    </el-row>
  </div>
</template>

<script type="text/javascript">
import myMenu from "@/components/main/banner/menu.vue";
import rightBanner from "@/components/main/banner/rightBanner.vue";
import scenes from "@/components/main/container/scenes.vue";
export default {
  data() {
    return {
      hasStyle: {
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all",
          },
          {
            text: "食物",
            tab: "food",
          },
          {
            text: "SPA",
            tab: "spa",
          },
          {
            text: "电影",
            tab: "movie",
          },
        ],
      },
      discount: {
        title: "狠优惠",
        subtitle: ["全部", "美食", "休闲"],
      },
    };
  },
  components: {
    myMenu,
    rightBanner,
    scenes,
  },
};
</script>
<style type="text/css" lang="less">
.page-main {
  width: 1190px;
  margin: 0 auto;
  .position {
    position: relative;
  }
}
</style>