<!--
 * @Author: your name
 * @Date: 2021-09-05 12:17:46
 * @LastEditTime: 2021-10-19 18:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\src\view\PageView.vue
-->
<template>
    <div id="container">
        <router-view />
        <router-view name="big" class="big"></router-view>
    </div>
</template>
<script>
export default {
    name: 'PageView'
}
</script>
<style scoped>
.big{
  position: absolute;
  top: 0px;
  bottom: 0px;
  background-color: white;
  right: 0;
  left: 0;
  z-index: 99;
}
</style>

