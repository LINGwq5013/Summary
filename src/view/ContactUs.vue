<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10 col-xs-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="请输入名字"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="请输入邮箱"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">电话</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="tel"
                    placeholder="请输入电话"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">内容</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="content"
                    rows="8"
                    placeholder="请输入内容"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default btn-block">
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map1" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
// import BMap from "BMap";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {
    // var map = new BMap.Map("container");
    // 	//设置中心的坐标
    // 	var point = new BMap.Point();
    // 	//初始化地图页面，设置中心点坐标和地图级别
    // 	map.centerAndZoom(point, 15);
    // 	//开启鼠标滚轮缩放地图
    // 	map.enableScrollWheelZoom(true);

    // 	//添加控件
    // 	//缩略地图OverviewMapControl，默认位于地图右下方，是一个可折叠的缩略地图
    // 	map.addControl(new BMap.OverviewMapControl());
    // 	//地图类型MapTypeControl, 默认位于地图右上方
    // 	map.addControl(new BMap.MapTypeControl());
    // 	//平移缩放控件 NavigationControl	, PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方
    // 	map.addControl(new BMap.NavigationControl());
    // 	//比例尺ScaleControl, 默认位于地图左下方，显示地图的比例关系
    // 	//map.addControl(new BMap.ScaleControl());
    // 	//设置控件位置偏移，x,y轴
    // 	var opts = {offset: new BMap.Size(90, 30)}
    // 	map.addControl(new BMap.ScaleControl(opts));

    // 	//根据浏览器定位，之后显示当前位置
    // 	var geolocation = new BMap.Geolocation();
    // 	geolocation.getCurrentPosition(function(r){
    // 		if(this.getStatus() == BMAP_STATUS_SUCCESS){
    // 			var mk = new BMap.Marker(r.point);
    // 			map.addOverlay(mk);
    // 			map.panTo(r.point);
    // 			var latCurrent = r.point.lat;
    // 			var lngCurrent = r.point.lng;
    // 			alert('您的位置：'+r.point.lng+','+r.point.lat);
    // 			//设置导航终点，起始位置到终点位置
    // 			location.href = "http://api.map.baidu.com/direction?origin=" + latCurrent + "," + lngCurrent +
    // 			"&destination=30.4325,111.182311&mode=driving&region=随便写的一个地址&output=html";
    // 		}
    // 		else {
    // 			alert('failed'+this.getStatus());
    // 		}
    // 	});

    // var map = new BMap.Map("map1"); // 创建地图实例
    // var point = new BMap.Point(116.501573, 39.900877); // 创建点坐标
    // map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // var geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function (r) {
    //   var mk = new BMap.Marker(r.point);
    //   map.addOverlay(mk);
    //   map.panTo(r.point);
    //   // console.log(r)
    //   alert("您的位置：" + r.point.lng + "," + r.point.lat);
    // });
    // console.log(r)

    // console.log(marker)
    // 将标注添加到地图中
    // map.panTo(r.point);
    // var latCurrent = r.point.lat;
    // var lngCurrent = r.point.lng;
    // var marker1 = new BMap.Marker(r.point); // 创建标注
    // alert(marker1)
    // map.addOverlay(marker1);
    // console.log(latCurrent)
    // console.log(lngCurrent)

    // 打开信息窗口

    // console.log(this.marker1)
    // var marker = new BMap.Marker(this.marker1);
    //  map.addOverlay(marker);
    // var opts = {
    //   width: 50, // 信息窗口宽度
    //   height: 10, // 信息窗口高度
    //   title: "黄元公寓", // 信息窗口标题
    // };
    // var infoWindow = new BMap.InfoWindow("我的家", opts); // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, map.getCenter());
    var wow = new WOW();
    wow.init();
  },
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map1 {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

