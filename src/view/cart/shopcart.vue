<template>
  <div>
    <div class="shopcart">
      <!-- 底部购物车主体  -->
      <div class="content">
        <div class="content-left">
          <!--购物车的logo,，有一个外层容器包装它-->
          <div class="logo-wrapper" @click="toggleList">
            <!--判断商品数量动态添加样式-->
            <!-- :class（满足条件时highlight发生） -->
            <div class="logo" :class="{ highlight: totalCount > 0 }">
              <i
                class="icon-shopping_cart"
                :class="{ highlight: totalCount > 0 }"
              ></i>
            </div>
            <!--显示选中多少商品-->
            <div v-show="totalCount > 0" class="num">{{ totalCount }}</div>
          </div>
          <!--购物车旁边的价格和配送费-->
          <div class="price" :class="{ highlight: totalPrice > 0 }">
            ￥{{ totalPrice }}元
            <div
              style="font-size: 8px; margin-left: -14px"
              v-show="totalPrice1 < 50"
            >
              优惠：满减活动
            </div>
            <div v-show="totalPrice1 >= 50 && totalPrice1 < 100">已减5块</div>
            <div v-show="totalPrice1 >= 100 && totalPrice1 < 150">已减10块</div>
          </div>
          <div class="desc">另需配送费￥{{ deliveryP }}元</div>
        </div>
        <div class="content-right" @click="pay">
          <!-- 另外一种绑定 :class="[totalPrice>=minPrice?'enough':'no-enough']"-->
          <div class="pay" :class="payClass">
            <!--还可以绑定一个方法-->
            <div v-if="totalPrice1 == 0">{{ minPrice }}元起送</div>
            <div v-else>{{ payDesc }}</div>
          </div>
        </div>
      </div>
      <!-- 购物车列表展示 -->
      <transition name="fold">
        <div class="shopcart-list" v-show="fold">
          <div class="list-header">
            <span class="title">购物车</span>
            <span class="title1" @click="hideList">关闭</span>
            <span class="empty" @click="emptyShopCart">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li
                class="food1"
                v-for="(food, index) in selectFoodss"
                :key="index"
              >
                <span class="name">{{ food.name }}</span>
                <div class="price">
                  <span>￥{{ food.price * food.count }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol
                    ref="cartadd"
                    @add="addFood"
                    :food="food"
                  ></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <!-- 购物车弹出的黑色遮罩层 -->
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="fold"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import cartcontrol from "./cartadd.vue";
import BScroll from "better-scroll";
export default {
  props: {
    // 获取子组件goods传递过来的参数
    selectFoodss: {
      // 获取选中的商品，来计算价格
      type: Array,
      default() {
        // vue 里面如果类型是一个Array或者Object，那么默认值就是一个函数
        return [
          {
            price: 0,
            count: 0,
          },
        ];
      },
    },
    // seller:{
    //   type: Number,
    // },
    // 这里的deliveryPrice，minPrice，selectFoodss没有起修改数值作用，修改作用在goods主页，起传值作用，这里名称修改，主页相对就行
    deliveryP: {
      // 配送费
      type: Number,
      default: 0, // 设置默认值
    },
    minPrice: {
      // 多少元起送
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      fold: false,
    };
  },
  computed: {
    // 满减的区间取值
    totalPrice1() {
      let totbl = 0;
      this.selectFoodss.forEach((food) => {
        totbl += food.price * food.count;
      });
      return totbl;
    },
    // 计算数组中选中商品的总价
    totalPrice() {
      let total = 0;
      this.selectFoodss.forEach((food) => {
        total += food.price * food.count;
      });

      if (total >= 50 && total < 100) {
        return total - 5;
      } else if (total >= 100 && total <= 150) {
        return total - 10;
      } else {
        return total;
      }
    },
    totalCount() {
      // 返回选中商品的总数
      let count = 0;
      this.selectFoodss.forEach((food) => {
        count += food.count;
      });
      return count;
    },
    payDesc() {
      // 右侧按钮的状态显示，还差多少元，立即购买等
      if (this.totalPrice === 0) {
        // return '￥'+this.minPr';
        // 也可以使用ES6 的形式写 `` ${获取的值}
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}元起送`;
      } else {
        return "去结算";
      }
    },
    payClass() {
      // 判断按钮使用哪一个class
      if (this.totalPrice < this.minPrice) {
        return "no-enough";
      } else {
        return "enough";
      }
    }
  },
  watch: {
    fold(val) {
      if (val == true) {
        this.$nextTick(() => { // 调用 BSCroll插件
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              });
            } else {
              this.scroll.refresh(); // 因为listShow 是不断变化的，这里调用Bscroll的刷新接口
            }
          });
      }
      
    },
    selectFoodss(val){
        if(val.length == 0){
           this.fold = false;
        }
    }
  },
  methods: {
    toggleList() {
      // 购物车的是否折叠状态
      if (!this.totalCount) {
        // // this.totalCount < 0
        return;
      }
      this.fold = !this.fold;
    },

    // 关闭购物车
    hideList() {
      this.fold = false;
    },
    // 清空
    emptyShopCart() {
      this.selectFoodss.forEach((food) => {
        food.count = 0;
      });
      this.fold = false;
    },
    pay() {
      let oredertime = new Date().getTime();
      for (var i = 0; i < this.selectFoodss.length; i++) {
        this.selectFoodss[i].ordertime = oredertime;
        this.selectFoodss[i].zong = this.totalPrice;
        this.selectFoodss[i].yuan = this.totalPrice1;
      }

      localStorage.setItem("cart", JSON.stringify(this.selectFoodss));
      var data = JSON.parse(localStorage.getItem("cart"));
      console.log(data);
      this.$store.dispatch("setorder", data);
      this.$router.push("/amap/orders");
      setTimeout(() => {
        this.emptyShopCart();
      }, 300);
    },
    addFood(target) {
      console.log("fffff");
      this.$emit("add", target);
    },
  },
  components: {
    cartcontrol,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './../../assets/stylus/mixin';

.shopcart { // 购物车外层
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 5000;
  width: 100%;
  height: 48px;

  .content { // 购物车内层
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);

    .content-left { // 购物车左边自适应区域
      flex: 1;

      .logo-wrapper { // 购物车图标外层
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;

        .logo { // 购物车 logo
          width: 100%;
          height: 100%;
          border-radius: 50%;
          text-align: center;
          background: #2b343c;

          &.highlight { // 当商品个数大于 0时的图标样式
            background: rgb(0, 160, 220);
          }

          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;

            &.highlight { // 当商品个数大于 0时的个数样式
              color: #fff;
            }
          }
        }

        .num { // 选中商品数量
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }

      .price { // 选中的商品价格
        display: inline-block;
        vertical-align: top;
        margin-top: 5px;
        line-height: 20px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(225, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;

        &.highlight {
          color: #fff;
        }
      }

      .desc { // 还需多少钱配送提示文字
        display: inline-block;
        vertical-align: top;
        margin: 12px 0 0 12px;
        line-height: 24px;
        font-size: 10px;
      }
    }

    .content-right { // 购物车右边固定宽度区域
      flex: 0 0 105px;
      width: 105px;

      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 15px;
        font-weight: 700;
        background: #23333b;

        &.not-enough {
          background: #23333b;
        }

        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }

  .shopcart-list { // 购物车列表样式
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translate3d(0, -100%, 0);

    &.fold-enter-active, &.fold-leave-active {
      transition: all 0.5s;
    }

    &.fold-enter, &.fold-leave-active {
      transform: translate3d(0, 0, 0);
    }

    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 21, 0.1);

      .title1 {
        float: left;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }

      .title {
        margin-left: 38%;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }

      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }

    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow-y: scroll;
      background: #fff;

      .food1 {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        border-1px(rgba(7, 17, 27, 0.1));

        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .price {
          position: absolute;
          right: 120px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          z-index: 6666;
          bottom: 6px;
        }
      }
    }
  }
}

.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4900;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.6);

  &.fade-enter-active, &.fade-leave-active {
    transition: all 0.5s;
  }

  &.fade-enter, &.fade-leave-active {
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
}
</style>