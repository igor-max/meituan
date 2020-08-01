<template>
  <div class="choose-province">
    <div class="choose-select">
      <h3>按省份选择:</h3>
      <div class="select-wrap">
        <chooseSelect
          :list="provinceList"
          :title="'省份'"
          :showActive="provinceActive"
          @change-select="changeProvinceActive"
          @hide-select="hideSelect"
          @change="changeProvince"
          :disabled="false"
        />
        <chooseSelect
          :list="cityList"
          :title="'城市'"
          :showActive="cityActive"
          @change-select="changeCityActive"
          @hide-select="hideSelect"
          @change="changeCity"
          :disabled="cityDisabled"
        />
      </div>
    </div>
    <div class="search-city">
      <h3>直接搜索：</h3>
      <el-select v-model="searchWord" filterable remote reserve-keyword placeholder="请输入关键词">
        <el-option v-for="(item,index) in searchList" :key="index" :value="item"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script type="text/javascript">
import chooseSelect from "./select.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      provinceList: [],
      cityList: [],

      provinceActive: false,
      cityActive: false,

      searchList: [
        "石家庄",
        "保定",
        "廊坊",
        "唐山",
        "秦皇岛",
        "邯郸",
        "邢台",
        "张家口",
        "承德",
        "沧州",
        "衡水",
        "涿州",
        "石家庄",
        "保定",
        "廊坊",
        "唐山",
        "秦皇岛",
        "邯郸",
        "邢台",
        "张家口",
        "承德",
        "沧州",
        "衡水",
        "涿州",
        "石家庄",
        "保定",
        "廊坊",
        "唐山",
        "秦皇岛",
        "邯郸",
        "邢台",
        "张家口",
        "承德",
        "沧州",
        "衡水",
        "涿州",
      ],
      searchWord: "",
      cityDisabled: true,
    };
  },
  created() {
    api.getProvince().then((resp) => {
      this.provinceList = resp.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      });
      console.log(this.provinceList);
    });
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      this.cityActive = false;
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      this.provinceActive = false;
    },
    changeProvince(value) {
      // 自定义change事件   // 只有选择了省份disabled才能变为false，也就是说city才能点击,并且隐藏province，并且获取cityList
      this.cityDisabled = false; // 可以点击city
      this.provinceActive = false; // 隐藏province
      console.log(value);
      this.cityList = value.cityInfoList; // 获取 cityList
    },
    changeCity(value) {
      // 自定义change事件
      // 保存value到vuex的position，并且跳转路由到首页
      console.log(value.name);
      this.$store.commit("setPosition", value.name);
      this.$router.push("/");
    },
    hideSelect() {
      // 点击document隐藏city and province
      this.provinceActive = false;
      this.cityActive = false;
    },
  },
  components: {
    chooseSelect,
  },
};
</script>

<style type="text/css" lang="less">
.choose-province {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  .choose-select {
    display: inline-block;
    vertical-align: middle;
    h3 {
      display: inline-block;
      font-size: 16px;
      color: #333;
      font-weight: 500;
      vertical-align: middle;
    }
    .select-wrap {
      display: inline-block;
    }
  }
  .search-city {
    margin-left: 40px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    h3 {
      vertical-align: middle;
      font-size: 16px;
      color: #333;
      font-weight: 500;
      display: inline-block;
    }
  }
}
</style>
