<!--
 * @Author: your name
 * @Date: 2021-08-12 19:03:38
 * @LastEditTime: 2021-10-19 18:16:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-master\src\view\amap1.vue
-->
<template>
  <div id="app">
    <div class="head">
    <div class="fanhui" @click="back">返回主页面</div>
    <div class="tab">
      <div class="tab-item" :class="{ actice2: current == 0 }">
        <router-link to="/amap/goods">商品</router-link>
      </div>
      <div class="tab-item" :class="{ actice2: current == 1 }">
        <router-link to="/amap/orders">订单</router-link>
      </div>
    </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  watch: {
    $route(Newvalue) {
      var list = Newvalue.fullPath;
      if (list.indexOf("/goods") != -1) {
        this.current = 0;
      }
      if (list.indexOf("/orders") != -1) {
        this.current = 1;
      }
    },
  },
  mounted() {},
  methods: {
    back(){
       this.$router.push({
        name: "home",
      });
    }
  },
};
</script>

<style scoped>
#app {
  width: 100%;
}
.actice2 a {
  color: rgb(218, 31, 31) !important;
  text-decoration: none;
}
.head{
  width: 100%;
  height: 30px;
  display: flex;
}
.fanhui{
  padding: 5px 0 0 0;
  margin: 0;
  
  width: 80px;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
}
.tab {
  zoom: 1;
  width: 100%;
  display: flex;
}
.tab-item {
  padding: 5px 0 0 0;
  flex: 1;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
}
</style>