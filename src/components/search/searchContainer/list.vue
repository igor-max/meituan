<template>
  <div class="list">
    <ul class="list-nav clearfix">
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
    <div class="list-container">
      <product-item v-for="product in productData" :key="product.itemId" :product="product" />
    </div>
  </div>
</template>

<script type="text/javascript">
import productItem from "./productItem.vue";
export default {
  props: ["listData"],
  data() {
    return {
      productData: [
        {
          itemId: "2571323",
          title: "井格重庆火锅（哈西万达店）",
          imgUrl: "http://qcloud.dpfile.com/pc/VlUNJpjgCDFtU2rDFIBnMkR-GQHbguip__oEAUaTFJ4Dnw8jcyW4sc-iLuwOCZlKZSUjBikR5Ecy-DoGYkMhlg.jpg",
          type: "food",
          score: 5,
          commentNum: 2555,
          comment: [
            {
              username: "匿名用户",
              image: "https://www.dpfile.com/ugc/user/anonymous.png",
              rate: 5,
              pics: ["http://p0picxxxxx", "http://picxxxxx"],
              evalaute: "xxxx",
            },
          ],
          tab: ["重庆火锅", "哈西万达"],
          address: "南岗区中兴大街168号万达广场3层3055",
          phone: "0451-85717159",
          businessTime: "周一至周日 09:30-21:00",
          service: ["提供wifi"],
          recommend: ["现炸酥肉", "井格毛肚"],
          avgPrice: 95,
          dealItems: [
            {
              title: "100元代金券1张",
              price: 28.9,
              counterPrice: 100,
              saleNum: 3409,
              priceType: "元",
            },
          ],
        },
      ],
    };
  },
  methods: {
    chooseSort(e) {
      let target = e.target;
      if (target.tagName == "SPAN") {
        target.classList.add("active");
      }
    },
  },
  components: {
    productItem,
  },
};
</script>

<style type="text/css" lang="less">
.list {
  width: 950px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  padding: 11px 20px;
  .list-nav {
    padding-bottom: 2px;
    li {
      float: left;
      min-width: 96px;
      font-weight: 500;
      color: #666;
      cursor: pointer;
    }
  }
}
.common-list {
  .sort-option {
    padding-bottom: 2px;
    padding: 11px 20px;
    padding-top: 15px;
    li {
      span {
        cursor: pointer;
      }
      span.active {
        color: #222;
      }
    }
    li.price-sort {
      position: relative;
      span::before {
        left: 60px;
        position: absolute;
        top: 50%;
        border: 3.2px solid transparent;
        border-bottom-color: #222222;
        content: "";
        display: block;
        border-bottom-width: 4px;
        margin-top: -8px;
      }
      span::after {
        border: 3.2px solid transparent;
        content: "";
        display: block;
        height: 0;
        left: 60px;
        top: 50%;
        position: absolute;
        width: 0;
        border-top-width: 4px;
        border-top-color: #ccc;
        margin-top: 1px;
      }
    }
  }
}
</style>