<!--
 * @Author: your name
 * @Date: 2021-01-20 10:30:30
 * @LastEditTime: 2021-10-19 21:32:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chelx\src\components\day\video.vue
-->
<template>
  <div class="swiper-box">
    <!-- swiper1 -->
     <h3>缩略轮播</h3>
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(item, index) of slides" :key="index">
        <img class="swiper-img" :src="item.img" />
      </swiper-slide>
      <!-- 下面是另外一种实现方式,css加载图片 -->
      <!-- <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide> -->
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </swiper>

    <!-- swiper2 Thumbs -->

    <swiper
      :options="swiperOptionThumbs"
      class="gallery-thumbs"
      ref="swiperThumbs"
    >
      <swiper-slide v-for="(item, index) of slides" :key="index">
          <img class="swiper-img1" :src="item.img" />
        </swiper-slide>
      <!-- <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptionTop: {
        // loop:true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        spaceBetween: 4,

        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      slides: [
        { img: require("./../assets/image/1.jpg") },
        { img: require("./../assets/image/2.jpg") },
        { img: require("./../assets/image/3.jpg") },
        { img: require("./../assets/image/4.jpg") },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: #000;
}

.swiper-img1 {
  width: 120px;
  height: 100px;
}
.swiper-box {
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
}
.swiper-box >h3{
  margin: 10px 5px;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  &.slide-1 {
    background-image: url("./../assets/image/1.jpg");
  }
  &.slide-2 {
    background-image: url("./../assets/image/2.jpg");
  }
  &.slide-3 {
    background-image: url("./../assets/image/3.jpg");
  }
  &.slide-4 {
    background-image: url("./../assets/image/4.jpg");
  }
  &.slide-5 {
    background-image: url("./../assets/image/5.jpg");
  }
}
.gallery-top {
  height: 80% important;
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  width: 600px;
  display: flex;
  justify-content: space-between;
}
.gallery-thumbs .swiper-slide {
  width: 20%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
