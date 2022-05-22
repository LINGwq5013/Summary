<!--
 * @Author: your name
 * @Date: 2021-09-06 16:44:18
 * @LastEditTime: 2021-10-13 21:46:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \guan\src\view\vant\Vantlist.vue
-->
<template>
  <div class="top-banner clearfix">
    <div class="topa">
      <top-hea></top-hea>
    </div>
    <div class="topb">
      <top-a></top-a>
    </div>
    <div class="topc">
      <top-sub></top-sub>
    </div>
    <div class="topc1">
      <goods-TopBox></goods-TopBox>
    </div>
    <div class="topd">
      <goods-Collocation></goods-Collocation>
    </div>
    <div class="tope">
      <top-e></top-e>
    </div>
    <div class="topf">
      <footer-a></footer-a>
    </div>
  </div>
</template>

<script>
import tophea from "./TopHeader";
import topa from "./Topa.vue";
import tope from './Tope.vue'
import topSub from "./TopSub";
import goodsCollocation from "./GoodsCollocation.vue";
import goodsTopBox from "./GoodsTopBox.vue";
import footera from "./Footera.vue";
export default {
  data() {
    return {

    };
  },
 
  components: {
    "top-hea": tophea,
    "top-sub": topSub,
    "goods-Collocation": goodsCollocation,
    "goods-TopBox": goodsTopBox,
    "footer-a": footera,
    "top-a": topa,
    "top-e":tope
  },
  watch: {},
};
</script>

<style lang="less" scoped>
.top-banner {
  position: absolute;
  height: auto;
  padding: 0 50px;

}
.topa {
  position: relative;
  width: 1226px;
  height: 100px;
  background: white;
}
.topb {
  width: 1226px;
  height: 460px;
  position: relative;
}
.topc {
  width: 1226px;
  height: auto;
  position: relative;
}
.topc1 {
  width: 1226px;
  height: 680px;
  background: #eee;
  position: relative;
}
.topd {
  width: 1226px;
  height: 680px;
  background: #eee;
  overflow: hidden;
  position: relative;
}
.tope {
  width: 1226px;
  background: #eee;
  position: relative;
}
</style>
