<template>
  <div class="shuju">
    <div class="suo">
        <h3>分页列表</h3>
      <div class="top">
        <el-input class="left" v-model="searchData" placeholder="输入名称搜索"></el-input>
        <el-button  class="center" type="success" @click="search">搜索</el-button>
        <el-button class="right" type="success" @click="pai">按金额排序</el-button>
      </div>
      <!-- <el-row>
        <el-col :span="6">
          <el-input v-model="searchData" placeholder="输入名称搜索"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="search">搜索</el-button>
        </el-col>
        <el-col :span="2" style="margin:0 10px;">
          <el-button type="success" @click="pai">按金额排序</el-button>
        </el-col>
      </el-row> -->
      <el-table :data="lists">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <div class="lieb">
      <h3>虚拟列表</h3>
      <div class="list-wrap" ref="listWrap" @scroll="scrollListener">
        <div class="scroll-bar" ref="scrollBar"></div>
        <ul class="list" ref="list">
          <li v-for="(val, index) in showList" :key="index">{{ val }}</li>
        </ul>
      </div>
    </div>
    <div class="lieb">
      <h3>axios跨域</h3>
        <ul v-for="(item,index) in list3" :key="index">
          <a>{{index+1}}:</a>
          <a >{{item.title}}</a>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [], //超长的显示数据
      itemHeight: 30, //每一列的高度
      showNum: 10, //显示几条数据
      start: 0, //滚动过程显示的开始索引
      end: 10, //滚动过程显示的结束索引
      list3:{},
      gggg: "暂无数据",
      lists: [],
      limit: 5,
      total: null,
      page: 1,
      searchData: "",
    };
  },
  created() {
    const { foods } = require("./../assets/datab.json");
    this.lists = [...foods];
    this.data = this.lists;
    this.getList();
    this.$axios.get("apl/news/latest").then((res) => {
      // console.log(res);
      // console.log(res.data.stories);
      this.list3 = res.data.stories;
    });
  },
  computed: {
    //显示的数组，用计算属性计算
    showList() {
      return this.list.slice(this.start, this.end);
    },
  },
  watch:{
     searchData(val){
        if(val==''){
         this.getList();
        }
     }
  },
  mounted() {
    //构造一个超长列表
    for (let i = 0; i < 100; i++) {
      this.list.push("列表" + i);
    }
    //计算滚动容器高度
    this.$refs.listWrap.style.height = this.itemHeight * this.showNum + "px";
    //计算总的数据需要的高度，构造滚动条高度
    this.$refs.scrollBar.style.height =
      this.itemHeight * this.list.length + "px";
  },
  methods: {
    scrollListener() {
     
     this.$nextTick(()=>{
        //获取滚动高度
      let scrollTop = this.$refs.listWrap.scrollTop;
      //   console.log(scrollTop)
      //开始的数组索引
      this.start = Math.floor(scrollTop / this.itemHeight);
      //结束索引
      this.end = this.start + this.showNum;
      //绝对定位对相对定位的偏移量
        this.$refs.list.style.top = this.start * this.itemHeight + "px";
     })
    },
    getList() {
      // es6过滤得到满足搜索条件的展示数据list
      let list1 = this.data.filter((item) =>
        item.name.includes(this.searchData)
      );
      this.lists = list1.filter(
        (item, index) =>
          index < this.page * this.limit &&
          index >= this.limit * (this.page - 1)
      );
      this.total = list1.length;
 
    },
    pai1(){
      
         this.lists.sort((a,b)=>{
           return a.price-b.price
         })
    },
    // 当每页数量改变
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.limit = val;
      this.getList();
      this.pai1();
      
    },
    // 当当前页改变
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.getList();
       this.pai1();
    },
    pai(){
      this.page = 1;
      this.data.sort((a,b)=>{
           return a.price-b.price
         })
         this.getList();
      // this.pai1();
    },
    // 搜索过滤数据
    search() {
      this.page = 1;
      this.getList();
    },
  },
};
</script>

<style lang="less" scoped>

.shuju {
  width: 100%;
}
.suo {
  width: 100%;
 
}
.top{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  .left{
     width: 25%;
     height: 100%;
  }
  .center{
    width: 10%;
    height: 100%;
  }
  .right{
     width: 10%;
    height: 100%;
  }
}
.suo h3{
   text-align: center; 
}
.lieb {
  margin: 20px auto;
  width: 30%;
}
.lieb h3 {
  text-align: center;
}
.list-wrap {
  position: relative;
  overflow-y: scroll;
  width: 100%;
  border: solid 1px red;
}
.list {
  position: absolute;
  top: 0;
  left: 0;
}
.list li {
  display: block;
  height: 30px;
  border: solid 1px blue;
  line-height: 30px;
  box-sizing: border-box;
}
.list li:nth-child(odd) {
  border-top: none !important;
}
.list li:nth-child(even) {
  border-top: none !important;
}
</style>