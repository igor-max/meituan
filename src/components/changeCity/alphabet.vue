<template>
  <dl class="alphabet">
    <dd>{{ alphabet.title }}</dd>
    <dt class="alphabet-list">
      <a
        :href="'#city-'+item"
        v-for="(item, index) in alphabet.chooseContent"
        :key="index"
      >{{ item }}</a>
    </dt>
  </dl>
</template>

<script type="text/javascript">
export default {
  props: ["alphabet"],
};
</script>

<style type="text/css" lang="less">
.alphabet {
  padding: 30px 0;
  dd {
    color: #333;
    font-weight: 500;
    vertical-align: top;
    display: inline-block;
    line-height: 25px;
  }
  .alphabet-list {
    font-size: 14px;
    display: inline-block;
    vertical-align: top;
    a {
      margin: 0 20px;
      color: #666;
      display: inline-block;
      font-size: 15px;
      display: inline-block;
      margin: 0 10px;
      width: 25px;
      height: 25px;
      padding-top: 2px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border-radius: 50%;
      line-height: 25px;
    }
    a:hover {
      font-weight: 500;
      color: #222222;
      background: #f8f8f8;
    }
  }
}
</style>