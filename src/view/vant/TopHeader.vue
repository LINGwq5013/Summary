<template>
  <div class="t5">
    <div class="container">
      <div class="left">
        <a class="icon-mi" @click="fanhui()">返回主页面</a>
        <p class="pic-gif"></p>
      </div>
      <div class="header-navs">
        <ul class="navs">
          <li v-for="(item, index) in navs" :key="index" class="nav">
            <template v-if="item.type">
              <a
                href="javascript: void(0);"
                class="nav-item"
                @mouseenter="evtHeaderEnter(item.type)"
                @mouseleave="evtHeaderLeave()"
                >{{ item.name }}</a
              >
            </template>
            <template v-else>
              <a :href="item.sourceUrl" target="_blank" class="nav-item">{{
                item.name
              }}</a>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="header-menu"
      @mouseenter="evtHeaderEnter()"
      @mouseleave="evtHeaderLeave()"
      v-show="headerStatus"
    >
      <ul class="menus">
        <li
          class="product"
          v-for="(item, index1) in currentPhones"
          :key="index1"
        >
          <a :href="item.sourcePath">
            <img :src="item.imgUrl" alt="" class="product-img" />
          </a>
          <div class="product-name">{{ item.name }}</div>
          <div class="product-price">
            {{ item.price }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerStatus: false,
      currentPhones: this.type,
      xiaomi: [
        {
          name: "小米Max",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "1299元起",
        },
        {
          name: "小米手机5",
          imgUrl: "http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "1499元起",
        },
        {
          name: "小米手机4c",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "1099元",
        },
        {
          name: "小米手机4c",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "1099元",
        },
      ],
      red: [
        {
          name: "红米pro",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "1499元起",
        },
        {
          name: "红米note3",
          imgUrl: "http://c1.mifile.cn/f/i/g/2015/video/hongmi3s!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "899元起",
        },
        {
          name: "红米手机3S",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/note3!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "699元起",
        },
        {
          name: "红米手机3",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/hongmi3!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "699元起",
        },
        {
          name: "红米手机3X",
          imgUrl: "http://c1.mifile.cn/f/i/g/doodle/320-220!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "799元",
        },
      ],
      flats: [
        {
          name: "小米平板2 16GB",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "999元",
        },
        {
          name: "小米平板2 64GB",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "1299元",
        },
        {
          name: "小米平板2 64GB Windows版",
          imgUrl:
            "http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64-win!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "1299元",
        },
        {
          name: "小米笔记本Air 12.5",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "3499元",
        },
        {
          name: "小米笔记本Air 13.3",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "4999元",
        },
      ],
      tv: [
        {
          name: "小米电视3S 43英寸",
          imgUrl: "http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg",
          sourcePath: "http://www.mi.com/mitv3s/43/",
          price: "1499元",
        },
        {
          name: "小米电视3S 48英寸",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mitv3s48!160x110.jpg",
          sourcePath: "http://www.mi.com/mitv3s/48/",
          price: "1999元",
        },
        {
          name: "小米电视3 55英寸",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mitv355!160x110.jpg",
          sourcePath: "http://www.mi.com/mitv3/55/",
          price: "3299元起",
        },
        {
          name: "小米电视3 60英寸",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg",
          sourcePath: "http://www.mi.com/mitv3/60/",
          price: "3499元",
        },
        {
          name: "小米电视3S 65英寸 曲面",
          imgUrl: "http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-65!160x110.jpg",
          sourcePath: "http://www.mi.com/mimax/",
          price: "8999元",
        },
        {
          name: "小米电视3 70英寸",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mitv70!160x110.jpg",
          sourcePath: "http://www.mi.com/mitv3/70/",
          price: "8999元",
        },
      ],
      box: [
        {
          name: "小米盒子mini版",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/hezimini.png",
          sourcePath: "http://www.mi.com/hezimini/",
          price: "179元",
        },
        {
          name: "小米盒子3",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/hezi3.png",
          sourcePath: "http://www.mi.com/hezi3/",
          price: "249元",
        },
        {
          name: "小米盒子3 增强版",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg",
          sourcePath: "http://www.mi.com/hezi3s/",
          price: "399元",
        },
        {
          name: "小米电视主机",
          imgUrl: "http://c1.mifile.cn/f/i/g/2015/cn-index/zhuji!160x110.jpg",
          sourcePath: "http://www.mi.com/tvzj/",
          price: "999元",
        },
        {
          name: "小米家庭音响 金属版",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/cn-index/jinshuban!160x110.jpg",
          sourcePath: "http://item.mi.com/1160800073.html",
          price: "899元",
        },
        {
          name: "小米家庭音响 标准版",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/cn-index/putonban!160x110.jpg",
          sourcePath: "http://item.mi.com/1160800074.html",
          price: "699元",
        },
      ],
      router: [
        {
          name: "全新小米路由器",
          imgUrl: "http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg",
          sourcePath: "http://www.mi.com/mitv3s/43/",
          price: "699元起",
        },
        {
          name: "小米路由器 3",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/miwifi-3!160x110.jpg",
          sourcePath: "http://www.mi.com/miwifi3/",
          price: "149元",
        },
        {
          name: "小米路由器 mini",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/miwifimini!160x110.jpg",
          sourcePath: "http://www.mi.com/miwifimini/",
          price: "119元",
        },
        {
          name: "小米路由器 3C",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg",
          sourcePath: "http://www.mi.com/mitv3/60/",
          price: "99元",
        },
        {
          name: "小米路由器 青春版",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/miwifilite!160x110.jpg",
          sourcePath: "http://www.mi.com/miwifilite/",
          price: "69元",
        },
        {
          name: "小米WiFi放大器",
          imgUrl:
            "http://c1.mifile.cn/f/i/15/goods/nav/wifiExtension!160x110.jpg",
          sourcePath: "http://item.mi.com/1153200003.html",
          price: "35元",
        },
      ],
      hardware: [
        {
          name: "九号平衡车",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/scooter!160x110.jpg",
          sourcePath: "http://www.mi.com/scooter/",
          price: "1999元",
        },
        {
          name: "小米净水器",
          imgUrl: "http://c1.mifile.cn/f/i/g/2015/cn-index/water2!160x110.jpg",
          sourcePath: "http://www.mi.com/water/",
          price: "1299元起",
        },
        {
          name: "米家压力IH电饭煲",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao!160x110.jpg",
          sourcePath: "http://www.mi.com/dianfanbao/",
          price: "999元",
        },
        {
          name: "小米空气净化器 2",
          imgUrl: "http://c1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg",
          sourcePath: "http://www.mi.com/air2/",
          price: "649元",
        },
        {
          name: "智能摄像机",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/doodle/zhinengyingjian!160x110.jpg",
          sourcePath: "http://list.mi.com/accessories/tag?id=shexiangji",
          price: "149元起",
        },
      ],
      navs: [
        { name: "小米手机", type: "xiaomi" },
        { name: "红米", type: "red" },
        { name: "平板 · 笔记本", type: "flats" },
        { name: "电视", type: "tv" },
        { name: "盒子 · 影音", type: "box" },
        { name: "路由器", type: "router" },
        { name: "智能硬件", type: "hardware" },
        { name: "服务", sourceUrl: "//www.mi.com/service/" },
        { name: "社区", sourceUrl: "http://www.xiaomi.cn" },
      ],
    };
  },
  ready() {},
  methods: {
    fanhui() {
     
      this.$router.push({
        name: "home",
      });
    },
    evtHeaderEnter(menuType) {
      // 有两个决定移入触发
      if (menuType) {
        this.currentPhones = this[menuType];
      }
      this.headerStatus = true;
    },
    evtHeaderLeave() {
      // let self = this
      this.headerStatus = false;
    },
  },
};
</script>

 <style lang="less" scoped>
.t5 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.container {
  position: relative;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 1226px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.left {
  width: 300px;
  position: relative;
}
.icon-mi {
  position: absolute;
  top: -5px;
}
.pic-gif {
  position: absolute;
  width: 163px;
  height: 66px;
  top: -30px;
  left: 80px;
  background: url("./../../assets/img/win.gif") no-repeat;
  background-size: 100%;
}
.right {
  width: 400px;
}
.navs {
  height: 88px;
  line-height: 88px;
  margin: 0;
  padding: 0;
  list-style: none;
  .nav {
    margin-left: 10px;
    display: inline-block;
    .nav-item {
      display: block;
      height: 88px;
      line-height: 88px;
      font-size: 16px;
      padding: 0 10px;
      text-decoration: none;
      color: #333;
      &:hover {
        color: #ff6700;
      }
    }
  }
}

.header-menu {
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  height: 230px;
  background: #fff;
  box-shadow: 0 1px 5px #ccc;
  z-index: 11;
  .menus {
    list-style: none;
    margin: 0;
    padding: 30px 0 0 30px;
    .product {
      float: left;
      width: 190px;
      a {
        display: block;
        padding: 0 30px;
        border-right: 1px solid #ccc;
      }
      &:nth-last-child(1) {
        a {
          border-right: 0;
        }
      }
      .product-img {
        width: 150px;
        height: 110px;
      }
      .product-name {
        width: 100%;
        height: 16px;
        margin-top: 16px;
        font-size: 12px;
        text-align: center;
      }
      .product-price {
        width: 100%;
        height: 14px;
        margin-top: 10px;
        font-size: 10px;
        text-align: center;
        color: #ff6700;
      }
    }
  }
}
</style>
