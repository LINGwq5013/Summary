<!--
 * @Author: your name
 * @Date: 2021-08-12 11:13:59
 * @LastEditTime: 2021-09-07 13:45:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-master\src\components\Footer.vue
-->
<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo_white.png" alt="logo图">
    </div>
    <p class="title">网站模板</p>
    <p class="address_tel_fax">
      <span>地址：广州市白云区鹤龙街道彭上社区</span> &nbsp; &nbsp;
      <span>手机：18707649xxx</span>
    </p>
    <p class="email_wx">
      <span>邮箱：1039137xxx@qq.com</span> &nbsp; &nbsp;
      <span>微信号：******</span>
    </p>
    <p class="copy">Copyright &copy; 2021.8 - 2021.9 </p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 300px;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

