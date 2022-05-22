<!--
 * @Author: your name
 * @Date: 2021-09-05 12:17:46
 * @LastEditTime: 2021-09-05 21:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\src\view\CompanyIntroduction.vue
-->
<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive center-block"
            src="@/assets/img/about_img.png"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          
          <p class=".text-justify">
            我叫xxx，今年26年，广东茂名人，现住白云嘉禾，出来工作已经三年了，在校所修专业计算机
            应用技术加上热爱学习前端技术，所以有良好的前端开发基础，熟悉vue,css，js等前端技术。node,sql方面也有一定的基础。
          </p>
          <p class=".text-justify">
            态度务实端庄，性格开朗，具有抗压性和坚持力。具有上进心，遇到问题会通过各种方法解决，并且有解决问题的经验。同时具有良好的代码习惯，能编写出高效、高性能、具有高可维护性的代码。热爱前端，好学，喜欢在前端领域折腾。
            逻辑分析能力强，善于沟通，较强的学习能力，具备良好的沟通能力和团队协作精神。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "CompanyIntroduction",
  data() {
    return {};
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

