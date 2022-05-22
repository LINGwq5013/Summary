<!--
 * @Author: your name
 * @Date: 2021-08-12 11:13:59
 * @LastEditTime: 2021-09-07 16:26:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-master\src\components\GoTop.vue
-->
<template>
  <div id="GoTop" @click="GoTop()" v-if="top1>=300">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false,
      top1:0
    };
  },

  
  mounted() {
    document.addEventListener("scroll", this.backtop, false);
  },
  methods: {
    backtop() {
      this.top1=document.documentElement.scrollTop
    },
    GoTop() {
      // 第一种方法
      window.scrollTo({ top: 0, behavior: "smooth" });

     // 第一种方法
      // const timer = setInterval(function () {
      //   const top =
      //     document.documentElement.scrollTop || document.body.scrollTop;
          
      //   const speed = Math.floor(-top / 6);
      //   document.documentElement.scrollTop = document.body.scrollTop =
      //     top + speed;
      //   if (top === 0) {
      //     clearInterval(timer);
      //   }
      // },80);

      // 第一种方法
      // (function smoothscroll() {
      //   var currentScroll =
      //     document.documentElement.scrollTop || document.body.scrollTop;
      //   if (currentScroll > 0) {
      //     window.requestAnimationFrame(smoothscroll);
      //     window.scrollTo(0, currentScroll - currentScroll / 10);
      //   }
      // })();
    },
  },
};
</script>
<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  cursor: pointer;
}
#GoTop > span {
  display: block;
  width: 100%;
  height: 100%;
  color: rgb(8, 162, 233);
  font-size: 30px;
}
</style>
