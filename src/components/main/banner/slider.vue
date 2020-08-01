<template>
  <el-carousel class="slider-container">
    <el-carousel-item v-for="(item, index) in imgList" :key="index">
      <img :src="item.imgSrc" alt class="slider-pic" />
    </el-carousel-item>
  </el-carousel>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      imgList: [
        {
          imgSrc:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
        {
          imgSrc:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          imgSrc:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          imgSrc:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.slider-container {
  width: 550px;
  height: 240px;
  overflow: hidden;
  cursor: pointer;
  float: left;
  .slider-pic {
    width: 100%;
    height: 100%;
  }
}
</style>