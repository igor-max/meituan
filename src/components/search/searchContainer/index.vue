<template>
  <div class="search-container">
    <div class="searchNav">
      <div class="search">
        <menuNav :title="classList.title" :list="classList.data" />
        <menuNav :title="areaList.title" :list="areaList.data" />
      </div>
      <list :listData="listData" />
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
import menuNav from "./menuNav.vue";
import list from "./list.vue";
export default {
  components: {
    menuNav,
    list,
  },
  data() {
    return {
      classList: {
        title: "分类",
        data: [
          {
            title: "美食",
            type: "food",
            subList: [
              {
                name: "日本菜",
                id: "Japan",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
        ],
      },
      areaList: {
        title: "区域",
        data: [
          {
            title: "美食",
            type: "food",
            subList: [
              {
                name: "日本菜",
                id: "Japan",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring",
              },
            ],
          },
        ],
      },
      listData: ["智能排序", "价格最高", "人气最高", "评价最高"],
    };
  },
};
</script>

<style lang="less">
.search {
  padding-bottom: 15px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>