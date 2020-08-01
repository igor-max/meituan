<template>
  <div class="main-container">
    <dl class="clearfix subnav" @mouseover="enterList">
      <dt>{{nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: showName == item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <div class="scenes-subContainer clearfix">
      <a href="#" v-for="(item, index) in scenesData[showName]" :key="index">
        <div class="img-show">
          <img :src="item.image" alt />
        </div>
        <div class="img-info">
          <p class="title">{{ item.title }}</p>
          <div class="sub-title">{{ item .subTitle }}</div>
          <div class="price-info">
            <span class="money-info">{{ item.price }}</span>
            <span class="old-price">{{ item.oldPrice }}</span>
            <span class="address">{{ item.address }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/javascript">
import api from "@/api/index.js";
export default {
  props: ["nav"],
  data() {
    return {
      showName: "all",
      scenesData: {}
    };
  },
  created() {
    api.getResultsByKeywords().then(resp => {
      this.scenesData = resp.data.data;
    });
  },
  methods: {
    enterList(e) {
      let dom = e.target;
      if (dom.tagName == "DD") {
        this.showName = dom.dataset.type;
        // 请求数据
      }
    },
  },
};
</script>

<style type="text/css" lang="less">
.main-container {
  margin: 40px 0;
  .subnav {
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(
      to right,
      rgb(194, 176, 142) 3%,
      rgb(190, 164, 116) 100%
    );
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    dt {
      font-size: 18px;
      float: left;
      cursor: pointer;
    }
    dd {
      position: relative;
      float: left;
      padding-left: 10px;
      cursor: pointer;
      &.active::after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: "";
        // display: block;
        width: 2px;
        height: 0;
        top: 32px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 100;
      }
      a {
        color: #fff;
      }
    }
  }
  .scenes-subContainer {
    padding: 11px 10px 10px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    a {
      width: 33.3%;
      height: 314px;
      padding: 10px;
      box-sizing: border-box;
      float: left;
      background: #fff;
      .img-show {
        height: 208px;
        margin-bottom: 11px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
      .img-info {
        text-align: left;
        .title {
          font-size: 16px;
          color: #222;
          height: 22px;
          line-height: 22px;
          margin-bottom: 8px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        .sub-title {
          font-size: 12px;
          color: #999;
          line-height: 18px;
          height: 18px;
          margin-bottom: 7px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price-info {
          height: 27px;
          overflow: hidden;
          margin-bottom: 10px;
          .money-info {
            font-size: 22px;
            color: #be9e4d;
            margin-right: 6px;
            letter-spacing: -0.8px;
            cursor: pointer;
          }
          .old-price {
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
          }
          .address {
            font-size: 12px;
            color: #999;
            float: right;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
