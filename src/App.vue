<!--
 * @Author: your name
 * @Date: 2021-09-05 11:24:36
 * @LastEditTime: 2021-10-13 21:49:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guanwang\src\App.vue
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    
    <Footer v-if="$route.path.indexOf('amap') ===-1 && $route.path.indexOf('try') ===-1"></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  watch:{
    // $route(Newvalue,Oldvalue){
    //     console.log(Newvalue)
        
    // }
  }
}
</script>

<style>
/* .router-link-exact-active{
  color: rgb(218, 31, 31) !important;
  text-decoration: none;
} */
body, ul, li, p, h1, h2, h3, h4, h5, h6, a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden
}

</style>
