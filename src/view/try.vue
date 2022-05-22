<!--
 * @Author: your name
 * @Date: 2021-09-05 12:17:46
 * @LastEditTime: 2021-10-19 21:08:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\src\view\try.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-06-02 16:34:37
 * @LastEditTime: 2021-07-28 22:40:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \try1\src\views\About.vue
-->
<template>
  <div class="about" v-loading="showa">
    <div class="back" @click="back">返回主页面</div>
    <van-index-bar class="citycell" :index-list="list1">
      <div class="tp" v-for="(val, i) in list" :key="i">
        <van-index-anchor :index="val.areaName" class="city"></van-index-anchor>
        <van-cell
          v-for="(item, index) in val.city"
          :key="index"
          :title="item.cityName"
          @click="selcity(item.cityName)"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      list1: [],
      showa: true,
    };
  },
  async created() {
    await axios.get("/bdapi/IHome/SiteList", {}).then((res) => {
      this.list = res.data.data.list;
      this.list.forEach((item) => {
        this.list1.push(item.areaName);
      });
    });
    this.showa=false
  },
  methods: {
    selcity(val) {
      this.$router.push({
        name: "weather",
        params: {
          cityid: val,
        },
      });
    },
    back() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
<style  scoped lang="less">
.back {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  cursor: pointer;
  padding: 0 0 0 10px;
}
.city {
  background-color: rgb(247, 247, 247);
}
/deep/ .van-index-bar__sidebar {
  height: 70%;

  text-align: center;
  display: flex;
  font-size: 17px;
  //  以y轴
  flex-direction: column;
  justify-content: space-around;
}
/deep/ .van-index-bar__index {
  font-size: 15px;
}
/deep/ .van-index-bar__index--active {
  color: red;
}
@media screen and (max-width: 450px) {
  .van-index-bar__index {
    margin-top: 15px;
  }
}
@media screen and (min-width: 450px) and (max-width: 960px) {
  .van-index-bar__index {
    margin-top: 10px;
  }
}
</style>