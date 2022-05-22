<!--
 * @Author: your name
 * @Date: 2021-02-22 11:03:38
 * @LastEditTime: 2021-10-19 18:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车lx\src\components\cartcontrol\cartadd.vue
-->
<template>
  <div class="cartcontrol">
      <transition name="move">
        <div class="cart-decrease "  v-if="food.count>0" @click.stop="decreaseCart">
          <!-- 下面为另一种减号出现方式，也可以用加号的实现方式-->
           <span class="inner icon-remove_circle_outline"></span>
        </div>
        
      </transition>
      <div class="cart-count" v-if="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop="addCart">
          
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
props:['food'],
methods:{
    addCart(event){
       if(!event._constructed){
            return;
        }
        if(!this.food.count){
            Vue.set(this.food,'count',1);
        }else{
            this.food.count++;
        }
        this.$emit('add', event.target);
    },
    decreaseCart(event){
      if(!event._constructed){
            return;
        }
        if(this.food.count){
            this.food.count--;
        }
    }
}

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .cartcontrol
    z-index :6666
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all .4s linear
      opacity: 1
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
      transform: translate3d(0, 0, 0)
      .inner // 减按钮外层
        display: inline-block
        transition: all .4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    
      
</style>