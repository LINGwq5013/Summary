<!--
 * @Author: your name
 * @Date: 2021-09-07 17:03:51
 * @LastEditTime: 2021-10-12 21:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\src\view\cart\orders.vue
-->
<template>
  <div class="ordera">
      <div v-if="getOrder.length>0" class="maina" ref="maina">
        <div class="goods1a" v-for="(item,index) in getOrder" :key="index">
            <div class="topa">
                <div class="timea">时间:{{item[0].ordertime | dateFormat}}</div>
                <div class="yuanjiaa" v-show="item[0].zong != item[0].yuan">原价:{{item[0].yuan}}</div>
                <div class="pricea">价格:{{item[0].zong}}</div>
            </div>
            <ul class="lista" v-for="(item1,index1) in item" :key="index1">
              <li class="list1a">
                  <div class="zuoa">
                    <img :src="item1.image" class="img1a">
                  </div>
                  <div class="centera">
                      <li>名称:{{item1.name}}</li>
                      <li>价格:{{item1.price}}</li>
                      <li>数量:{{item1.count}}</li>
                  </div>
              </li>
            </ul>
        </div>
      </div>
      <div v-else class="kong">
         <h4>暂无订单，快去加购吧！</h4>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
 data() {
     return {
         
     }
 },
 computed:{
     ...mapGetters(['getOrder'])
 },
 mounted() {
 },
 methods:{
     
 }
      
 
}
</script>

<style lang="less" scoped>

.ordera{
    width: 100%;
}
.maina{
 width: 100%;
 max-height: 800px;
//  overflow: hidden;
 overflow-y: scroll;
}
.kong{
    width: 100%;
    height: 300px;
}
.kong h4{
    margin: 20% auto; 
    text-align: center;
}
.goods1a{
    margin-top: 15px;
    width: 100%;
    background-color: rgb(219, 235, 219);
    // border: 1px solid rgb(161, 161, 161);
}
.topa{
    width: 100%;
    height: 40px;
    position: relative;
    border-bottom:1px solid rgb(161, 161, 161);
}
.timea{
    float: left;
    margin: 0 10px;
    font-size: 15px;
    line-height: 40px;
}
.yuanjiaa{
    position: absolute;
    right:80px ;
    font-size: 15px;
    line-height: 40px;
}
.pricea{
    float: right;
    margin: 0 10px;
    font-size: 15px;
    line-height: 40px;
}
.lista{
    width: 100%;
    border-bottom:1px solid rgb(161, 161, 161);
}
// .list:last-child{
//     border: none;
// }
.list1a{
    position: relative;
    width: 100%;
    height: 60px;
    margin: 5px 0;
    .zuoa{
       float: left;
       width: 60px;
       height: 60px;
       margin-left: 20px;
       .img1a{
    width: 60px;
       height: 60px;
       }
    }
    .centera{
       margin:0 15px;
       float: left;
       font-size: 15px;
       height: 60px; 
    }
}

</style>