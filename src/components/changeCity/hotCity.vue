<template>
  <div class="hot-city">
    <dl>
      <dt class="title">{{ title }}</dt>
      <dd v-for="(hotCity) in hotCityList" :key="hotCity.id" class="city-item">
        <router-link to="/">{{ hotCity.name }}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["hotCityList", "title"],
};
</script>

<style type="text/css" lang="less">
.hot-city {
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
  .title {
	  display: inline-block;
  }
  .city-item {
    font-size: 14px;
    vertical-align: top;
    display: inline-block;
    margin-top: 2px;
    a {
      margin: 0 20px;
      color: #666;
      display: inline-block;
    }
    a:hover {
      color: #222222;
      font-weight: 500;
    }
  }
}
</style>