<template>
  <div class="filterNav">
    <div class="label">
      <label>{{ title }}</label>
      <a href="javascript:void(0);">全部</a>
    </div>
    <div class="tags">
      <span v-for="(item, index) in list" :key="index">
        <a href="javascript:void(0);">
          {{ item.title }}
          <i class="el-icon-caret-bottom"></i>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', "title"]
};
</script>

<style lang="less">
.filterNav {
  position: relative;
  padding: 15px 20px 0;
  font-size: 14px;
  .label {
    width: 160px;
    float: left;
    label,
    a {
      display: inline-block;
      height: 22px;
      line-height: 22px;
    }
    label {
      width: 80px;
    }
    a {
      border-radius: 100px;
      background: linear-gradient(to bottom right, #ffd000, #ffbd00);
      color: #222222;
      padding: 0 10px;
    }
  }
  .tags {
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
    margin-top: -6px;
    span {
      display: inline-block;
      min-width: 120px;
      padding: 10px 0;
      a {
        color: #666;
      }
    }
  }
}
</style>