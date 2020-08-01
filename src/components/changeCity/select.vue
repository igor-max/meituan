<template>
  <div
    :class="['select', disabled ? 'disabled' : '']"
    @click.stop="showContent"
    v-document-click="documentClick"
  >
    {{ value }}
    <i class="el-icon-caret-bottom"></i>
    <div :class="{ content: true}" v-if="showActive">
      <h2>{{ title }}</h2>
      <div v-for="(col, index) in renderList" :key="index" class="col">
        <span v-for="(item, i) in col" :key="i" @click.stop="changeValue(item)">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "list", "showActive", "disabled"],
  data() {
    return {
      value: this.title,
    };
  },
  mounted() {
    console.log(this.disabled);
  },

  methods: {
    showContent() {
      if (!this.disabled) {  // 是禁用状态则不能点击
        this.$emit("change-select", true);
        console.log('i am a disabled');
      }
    },
    changeValue(item) {
      // 点击后，1. 赋值
      this.value = item.name;
      this.$emit("change", item);
    },
    documentClick() {
      this.$emit("hide-select");
    },
  },
  computed: {
    renderList() {
      let col = Math.ceil(this.list.length / 12);
      let res = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, (i + 1) * 12);
        res.push(data);
      }
      return res;
    },
  },
};
</script>

<style scoped lang="less">
.select {
  position: relative;
  padding-left: 10px;
  cursor: pointer;
  border-radius: 4px;
  vertical-align: middle;
  display: inline-block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin: 0 10px 0 20px;
  position: relative;
  font-size: 14px;
  color: #666;
  &.disabled {
    cursor: not-allowed;
  }
  i {
    color: #666;
    height: 10px;
    position: absolute;
    right: 4px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
  .content {
    position: absolute;
    left: 0;
    top: 45px;
    height: 390px;
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 100;

    // &.active {
    //   display: block;
    // }

    &::before {
      content: "";
      position: absolute;
      top: -9px;
      left: 26px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid transparent;
      border-bottom: 7px solid #fff;
      z-index: 102;
    }
    &::after {
      content: "";
      position: absolute;
      top: -15px;
      left: 23px;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 9px solid transparent;
      border-bottom: 9px solid #ccc;
      z-index: 101;
    }

    h2 {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 11px;
    }

    .col {
      display: table-cell;
      span {
        cursor: pointer;
        font-size: 12px;
        color: #666;
        display: table;
        box-sizing: border-box;
        min-width: 60px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        padding: 1px 8px;
        margin: 6px 38px 6px 0;

        &:hover {
          border-radius: 10px;
          background: #f4f4f4;
        }
      }
    }
  }
}
</style>