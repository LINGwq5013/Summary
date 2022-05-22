<template>
  <div id="ServiceDetail">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>特色服务</p>
            <li
              :class="item.id == id ? 'active' : ''"
              v-for="(item, index) in serviceNavList"
              :key="index"
            >
              <a :href="'#' + item.id" @click="selectFo(item, $event)">{{
                item.title
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content wow zoomIn">
          <div
            class="content-block"
            v-for="(item, index) in serviceContentList"
            :key="index"
          >
            <h2 :id="item.id">
              {{ item.title }}
              <small>/ {{ item.eng_title }}</small>
            </h2>
            <div class="content" v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="try"></div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "ServiceDetail",
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "官网",
        },
        {
          id: "section-2",
          title: "电商项目",
        },
        {
          id: "section-3",
          title: "uinapp项目",
        },
        {
          id: "section-4",
          title: "小程序",
        },
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "官网",
          eng_title: "Official website",
          content:
            "<h3>主要技术</h3><p>使用postcss-pxtorem实现响应式布局，百分比自适应布局，轮播图，css的各种动态特效，js, jquery, echarts，bootstrap，wowjs动画加载等</p>",
        },
        {
          id: "section-2",
          title: "电商项目",
          eng_title: "E-commerce",
          content:
            "<h3>主要技术</h3><p>通过axios调用后台数据显示在页面和注册登录；文字验证和图形验证；router实现token身份验证；vuex实现购物车功能；轮播图；better-scroll来实现页面滚动和城市列表选择；使用vant实现城市三级选择等功能；调用高德,百度地图api；使用vue-cropper预览上传图片；放大镜功能；使用element-ui实现后台管理项目； 使用 sass、less、stylus预处理器定义css样式；父子和兄弟间的传值，图片和路由懒加载等</p>",
        },
        {
          id: "section-3",
          title: "uniapp",
          eng_title: "uniapp",
          content:
            "<h3>这是标题1</h3><p>轮播图；倒计时效果；scroll-view实现菜单区域滑动；使用阿里云官方矢量图标库等</p>",
        },
        {
          id: "section-4",
          title: "小程序",
          eng_title: "Applets",
          content: "<h3>技术</h3><p>使用uniapp实现编码，配置服务器域名</p>",
        },
      ],
      list: [],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
   

    var top = document.getElementById(this.id).offsetTop;
    // console.log(top);
    this.$(window).scrollTop(top+160);
    // bootstrap之affix(自动定位浮标)
    this.$("#myNav").affix({
      offset: {
        top: 300,
      },
    });
    var wow = new WOW();
    wow.init();
  },
  methods: {
    selectFo(item) {
      this.$nextTick(() => {
        this.id = item.id;
      });
    },
    
    
  },
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: paleturquoise;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
.content {
  font-size: 18px;
}
.try {
  width: 100%;
  height: 400px;
}
</style>
