<template>
  <div class="product-item">
    <router-link to="/" class="img">
      <img :src="product.imgUrl" alt />
    </router-link>
    <div class="item-wrap">
      <div class="item-detail">
        <router-link to="/" class="title">{{ product.title }}</router-link>
        <div class="score">
          <el-rate v-model="product.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
          <span v-if="product.score>4.5">很好</span>
          <span v-else-if="product.score>4">好</span>
          <span v-else-if="product.score>3.5">不错</span>
          <span v-else-if="product.score>3">一般</span>
          <span v-else>差</span>
          <span>{{ product.score }}分</span>
          <span class="comment">{{ product.commentNum }}人评论</span>
        </div>
        <div class="address-wrap">
          <span
            v-for="(item, index) in product.tab"
            :key="index"
          >{{ item + ((index < product.tab.length - 1) ? '|' : '') }}</span>
          <span class="address">{{ product.address }}</span>
          <router-link to="/" class="map">
            <i class="el-icon-location-information map-icon"></i>
            查看地图
          </router-link>
        </div>
        <div class="price">{{ product.avgPrice ? `人均¥${product.avgPrice}` : '暂无价格' }}</div>
      </div>
      <div
        to="/"
        class="dealItems"
        v-for="(item, index) in product.dealItems.slice(0, 2)"
        :key="index"
      >
        <router-link to="/">
          <div class="title">{{ item.title }}，可叠加</div>
          <div class="preferential">
            <span class="preferential-price">￥{{ item.price }}</span>
            <span>门市价￥{{ item.counterPrice }}</span>
            <span>已售{{ item.saleNum}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["product"],
};
</script>

<style type="text/css" lang="less">
.product-item {
  padding: 20px 0 16px;
  min-height: 125px;
  border-top: 1px solid #e5e5e5;
  font-size: 12px;
  .img {
    float: left;
    height: 125px;
    width: 220px;
    background-color: #f4f4f4;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item-wrap {
    margin-left: 220px;
    padding-left: 20px;
    .item-detail {
      padding-bottom: 10px;
      border-bottom: 1px dashed #ccc;
      .title {
        font-weight: 500;
        font-size: 16px;
        color: #333;
        display: block;
      }
      div {
        margin-top: 6px;
        &.score {
          div {
            display: inline-block;
            margin-right: 10px;
            span {
              margin-right: 0;
              i {
                font-size: 16px;
                margin: 0;
              }
            }
          }
          span {
            margin-right: 10px;
            // font-size: 12px;
            &.comment {
              color: #ff9900;
            }
          }
        }
        &.address-wrap {
          .address {
            margin: 0 10px;
          }
          .map-icon {
            color: orange;
          }
        }
      }
    }
    .dealItems {
      padding-top: 10px;
      margin-left: -10px;
      a {
        display: block;
        padding: 6px 10px 8px;
        &:hover {
          background-color: #f8f8f8;
          border-radius: 4px;
        }
        .title {
          color: #fe8c00;
        }
        .preferential span {
          margin-right: 10px;
          &.preferential-price {
            color: #ff6600;
          }
        }
      }
    }
  }
}
</style>