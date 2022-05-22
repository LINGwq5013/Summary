<!--
 * @Author: your name
 * @Date: 2021-08-12 11:13:59
 * @LastEditTime: 2021-09-24 20:22:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-master\src\view\Software.vue
-->
<template>
    <div id="Software" class="container">
        <div class="row">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>软件产品</p>
                    <li v-for="(item,index) in softwareList"  :key="index">
                        <router-link :class="{'active':current==index}" :to=item.path>{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data(){
        return{
            softwareList: [
                {
                    path: '/software/smartTown',
                    name: '缩略轮播'
                },{
                    path: '/software/bigData',
                    name: '视频轮播'
                }
            ],
            // current:0
        }
    },
    computed:{
     current(){
        var list=this.$route.fullPath
       if(list.indexOf('/bigData') != -1){
        //    console.log('bigData')
           return 1
       }
       else if(list.indexOf('/smartTown')!= -1){
        //    console.log('bigData')
           return 0
       }else{
           return -1
       }

     }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
        // console.log(this.$route.fullPath)
    },
}
</script>
<style scoped>
.show-imgs-container{
    width: 100%;
    height: 500px;
}
.active{
    color: red !important;
}
#left{
    margin: 50px 0;
}
.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #474747;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li:hover{
    background: #928989;
}
#right{
    padding: 50px 0;
   
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
</style>

