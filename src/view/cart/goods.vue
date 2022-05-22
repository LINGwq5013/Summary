<!--
  商品展示组件
-->
<template>
  <div>
    <div class="goods">
      <!--左侧菜单-->
      <div class="menu-wrapper" ref="menuWrapper">
        <!-- 使用ref:绑定要获取的元素-->
        <!--遍历所有商品大分类(菜单)-->
        <ul>
          <li
            v-for="(item, index) in goods"
            class="menu-item"
            :key="index"
            :class="{ current: currentIndex === index }"
            @click="selectMenu(index, $event)"
          >
            <span class="text border-1px">
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <!--右侧商品-->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <!--遍历所有商品 food-list-hook 也是一个变成习惯，表明他是被js选择的元素-->
          <li
            v-for="(item, index) in goods"
            :key="index"
            class="foods-list food-list-hook"
          >
            <h1 class="title">{{ item.name }}</h1>
            <!--右侧商品分割标题（分类）-->
            <ul>
              <!-- 这里是点击到详情页事件 -->
              <li
                @click="selectFo(food, $event)"
                v-for="(food, index) in item.foods"
                :key="index"
                class="food-item border-1px"
              >
                <!--商品的左右两侧-->
                <div class="icon">
                  <!--商品小图标-->
                  <img
                    width="57"
                    height="57"
                    :src="food.icon"
                    alt="food.name"
                  />
                </div>
                <div class="content">
                  <!-- 商品名称和描述-->
                  <h2 class="name">{{ food.name }}</h2>
                  <!--商品名称-->
                  <p class="desc">{{ food.description }}</p>
                  <!--描述-->
                  <div class="extra">
                    <!--销售-->
                    <span class="count">月售{{ food.sellCount }}</span
                    ><span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <!--价格-->
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-show="food.oldPrice"
                      >￥{{ food.oldPrice }}</span
                    >
                  </div>
                  <!-- 引入增加按钮组件  -->
                  <div class="cartcontrol-wrapper">
                    <!-- 上面遍历的是时候顺便传递food对象  -->
                    <!-- 这里与详情页无关 -->
                    <cartcontrol @add="addFood" :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--使用购物车组件，并传递配送费和起送费-->
      <!-- ref自定的名字 用来访问子组件 在方法里面使用this.$refs.xxxx 获取 -->
      <!-- 购物车事件 -->
      <shopcart
        :selectFoodss="selectFoodssd"
        :deliveryP="seller.deliveryPrice"
        :minPrice="seller.minPrice"
        ref="shopcart"
        @add="addFood"
      ></shopcart>
      <ball ref="ball"></ball>
    </div>

    <!-- 使用food组件 ，并传入一个选中的商品 -->
    <!-- ref 用来调用 子组件的方法 show  -->
    <!-- :food="selectedFood"将选中的food对象传递给子组件food，ref="food"，通过this.$refs.food获取到<food>这个DOM元素 -->
    <foodb @add="addFood" :food="selectedFoodxq" ref="foods"></foodb>
  </div>
</template>

<script>
import ball from './ball.vue'
import BScroll from "better-scroll"; // 导入滚动类库
import shopcart from "./shopcart.vue"; // 导入购物车组件
import cartcontrol from "./cartadd.vue"; // 引入增加按钮组件
import foodb from "./food.vue";
import goodData from "./../../assets/json/goods"; // 引入模拟的商品信息文件
import sellerData from './../../assets/json/seller';
export default {
 
  data() {
    return {
      search: "",
      showc: true,
      showa: false,
      showb: false,
      searchData: "",
      seller:[],
      goods: [],
      ggb:[], // 所有商品的大分类
      listHeight: [], // 用来存放右侧每一个分类/li的商品高度
      products: [],
      scrollY: 0, // 当期滚动的高度
      selectedFoodxq: {}, // 刚开始选中的商品为空，经过方法设置值传递给food组件
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY+20 >= height1 && this.scrollY+20 < height2)) {
          return i;
        }
      }
      return 0;
    },

    selectFoodssd() {
      // 循环遍历所有选中的商品
      let foodsy = [];
      // goody详单与item
      this.goods.forEach((goody) => {
        goody.foods.forEach((food) => {
          if (food.count) {
            foodsy.push(food);
          }
        });
      });
      return foodsy;
    }
  },
  created() {
    //左侧优惠，打折图标
   
    this.seller = sellerData
    this.goods = goodData;
   
    this.$nextTick(() => {
      this.initScroll();
      // 让对应
      this.calculateHeight();
    });
  },
  methods: {
    gg() {
      this.search = "";
      this.showa = !this.showa;
    },
    searchb() {
      let search = this.search;
      if (search) {
        this.searchData = this.products.filter(function (product) {
          return Object.keys(product).some(function (key) {
            return String(product[key]).toLowerCase().indexOf(search) > -1;
          });
        });
      }
      if (search === "") {
        this.searchData = "";
      }
      if (this.searchData.length == 0) {
        this.showb = true;
        this.showc = false;
      } else {
        this.showb = false;
        this.showc = true;
      }
      this.showa = true;
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.you.scrollToElement(el, 300);
    },

    initScroll() {
      this.zuo = new BScroll(this.$refs.menuWrapper, {
        click: true,
      });
      this.you = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3,
      });

      this.you.on("scroll", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    calculateHeight: function () {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let heightgg = 0;
      this.listHeight.push(heightgg);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        heightgg += item.clientHeight;
        // heightgg = heightgg+item.clientHeight
        this.listHeight.push(heightgg);
        // console.log(heightgg)
      }
    },
    selectFo(food, event) {
      // 设置选中的商品以便传递给 food组件
      if (!event._constructed) {
        return;
      }
      this.selectedFoodxq = food;
      this.$refs.foods.showgg(); // 调用 子组件 food 的show方法
    },
    addFood(target) {
      // 监听到的组件的事件回调
      this.$nextTick(() => {
        this.$refs.ball.drop(target); // 访问子组件的方法
      });
    },
  },
  components: {
    shopcart: shopcart, // 注册购物车组件
    cartcontrol: cartcontrol, // 注册加减按钮组件
    foodb: foodb, // 注册food组件
    ball:ball
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import './../../assets/stylus/mixin';

.goods {
  display: flex;
  position: absolute;
  top: 35px; // 这里是距离header和tab
  bottom: 46px; // 距离底部导航
  width: 100%;
  overflow: hidden;

  .menu-wrapper { // 菜单区域
    flex: 0 0 80px; // 即存在剩余空间也不放大 内容缩放情况 占位空间
    width: 80px; // 这里是兼容安卓浏览器
    background: #f3f5f7;

    .menu-item {
      display: table; // 这里使用display:table 无论有几行文字都能垂直居中
      width: 80px;
      height: 54px;
      padding: 0 12px;
      line-height: 14px;

      &.current { // 左侧当前选中的样式
        position: relative;
        z-index: 10;
        margin-top: -1px; // 这里需要加个相对定位才使生效，margin-top 挡住1px的边框
        background: #fff;
        font-weight: 700;

        .text {
          border-none();
        }
      }

      .text { // 优惠文字
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        border-1px: rgba(7, 17, 27, 0.1); // 1像素，还需要另外指定1px的class
        font-size: 12px;

        
      }
    }
  }

  .foods-wrapper { // 右侧食品区域
    flex: 1;

    .title { // 右侧商品（分类）标题
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item { // 右侧商品区域
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      border-1px: rgba(7, 17, 27, 0.1);

      &:last-child {
        border-none();
        margin-bottom: 0;
      }

      .icon { // 商品图片
        flex: 0 0 57px;
        margin-right: 10px;

        img {
          border-radius: 2px;
        }
      }

      .content { // 右侧内容
        flex: 1;

        .name { // 商品名
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rbg(7, 17, 27);
        }

        .desc, .extra { // 商品描述和销量的共有样式
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .desc { // 描述
          margin-bottom: 8px;
          line-height: 12px;
        }

        .extra { // 销量
          .count {
            margin-right: 12px;
          }
        }

        .price {
          font-weight: 700;
          line-height: 24px;

          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }

          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }

        .cartcontrol-wrapper { // 加减按钮组件
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>