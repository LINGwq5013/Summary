<!--
 * @Author: your name
 * @Date: 2021-09-07 12:33:25
 * @LastEditTime: 2021-09-24 21:23:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guan\src\view\weather.vue
-->
<template>
  <div class="weather">
      <a @click="fanhui" class="dj">返回</a>
     <h3>当前城市:{{this.cityid}}</h3>
    <div class="main">
        <div v-for="(v, i) in list1" :key="i">
          <li class="tp1">
            <p>{{ getWeek(v.week) }}</p>
            <p>{{ v.date }}</p>
            <p>
              <!-- 这里v-icon引入在libs/index ,图片通过static/css/base引入-->
              <v-icon
                :name="getWeatherType(v.dayWeather, '2')"
                color="red"
                :size="36"
              ></v-icon>
            </p>
            <p>{{ v.nightTemp }}℃ ~ {{ v.dayTemp }}℃</p>
            <p>{{ v.dayWeather }}</p>
            <p>风向：{{ v.dayWindDir }}</p>
          </li>
    </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
import { lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  data() {
    return {
      list1: [{}],
      cityid:""
    };
  },
  components:{
   "v-icon":Icon
  },
  mounted() {
    this.huoqu();
  },
  
  methods: {
      fanhui(){
       this.$router.push("/try")
      },
    huoqu() {
        this.cityid=this.$route.params.cityid
      let that = this;
      lazyAMapApiLoaderInstance.load().then(() => {
        var cityinfo = this.cityid;
        var weather = new AMap.Weather();
       
        weather.getForecast(cityinfo, function (err,data) {
        //   console.log(data.forecasts);
         if(err){
           console.log("222")
         }
          that.list1 = data.forecasts;         
        });
      });
    },
    getWeek(k) {
      return `星期${["一", "二", "三", "四", "五", "六", "日"][k - 1]}`;
    },
    getWeatherType(t) {
      let reg1 = /多云|阴/;
      let reg2 = /雷/;
      let reg3 = /雨/;
      let reg4 = /晴/;
      let reg5 = /雪/;
      // test() 方法用于检测一个字符串是否匹配某个模式.
      if (reg1.test(t)) {
        return "yintian";
      } else if (reg2.test(t)) {
        return "leidian";
      } else if (reg3.test(t)) {
        return "xiaoyu";
      } else if (reg4.test(t)) {
        return "qing";
      } else if (reg5.test(t)) {
        return "xue";
      }
    },
  },
};
</script>

<style scoped>
.dj{
    cursor: pointer;
    line-height: 20px;
}
.weather{
    width: 100%;
}
.weather h3{
    text-align: center;
}
.main{
    margin:40px 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

</style>