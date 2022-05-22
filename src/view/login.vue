<template>
  <!-- v-bgInmage="bg" 另外一种引入背景的方式，其中v-bgInmage定义在其他文件 -->
  <div class="vchat-login wow zoomIn">
    <div class="fork-me-on-github">
      <a href="https://github.com/LINGwq5013" target="_blank"></a>
    </div>
    <!-- active时上移 -->
    <div class="logo" v-if="getUser" :class="{ active: showSign }">
      <h3 class="title">您已经登录!</h3>
      <!-- <span class="begain" @click="experience">立即体验</span> -->
    </div>
    <div class="logo" v-else :class="{ active: showSign }">
      <h3 class="title">Hi, 请先登录 !</h3>
      <h5 class="title" @click="experience">立即体验</h5>
      <!-- <span class="begain" @click="experience">立即体验</span> -->
    </div>
    <div class="sign" v-if="showSign">
      <div class="title">
        <span :class="{ active: islogin }" @click="choose(true)">登录</span>
        <span :class="{ active: !islogin }" @click="choose(false)">注册</span>
      </div>
      <el-form
        ref="signForm"
        label-width="80px"
        class="signForm"
        :rules="signRules"
        :model="signForm"
      >
        <el-form-item prop="name">
          <el-input v-model="signForm.name" placeholder="账号">
            <i class="iconfont icon-zhanghao" slot="prepend"></i>
          </el-input>
        </el-form-item>

        <el-form-item prop="pass">
          <!-- @keyup.enter.native="enter(islogin)"给不给没必要 -->
          <el-input v-model="signForm.pass" placeholder="密码" type="password">
            <i class="iconfont icon-mima3" slot="prepend"></i>
          </el-input>
        </el-form-item>

        <el-form-item prop="repass" v-if="!islogin">
          <!-- @keyup.enter.native="enter(islogin)"给不给没必要 -->
          <el-input
            v-model="signForm.repass"
            placeholder="确认密码"
            type="password"
          >
            <i class="iconfont icon-mima2" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <!-- 验证码与下面initRegcode()实现-->
        <el-form-item prop="regcode" class="regcode-box">
          <el-input v-model="signForm.regcode" placeholder="验证码">
            <i class="iconfont icon-mima3" slot="prepend"></i>
          </el-input>
          <canvas ref="regcode" class="yanz" width="100" height="38"></canvas>
        </el-form-item>
      </el-form>
      <button @click="enter(islogin)">
        <!-- 下面这个效果明显 -->
        <!-- <v-icon class="el-icon-loading" color="#fff" :size="14" v-if="loading"></v-icon> -->
        {{ islogin ? "登录" : "注册" }}
      </button>
      <div class="login-foot" v-if="islogin">
        <span></span>
        <a> 账号:admin,密码:asd123</a>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Canvas from "vchat-regcode";
import { Dialog } from "vant";
export default {
  name: "login",
  data() {
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        let reg = /^[a-zA-Z0-9_]{2,8}$/;
        if (!reg.test(value)) {
          callback(new Error("请输入2~8位数字字母下划线"));
          return;
        }
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let reg = /^[a-zA-Z0-9]{6,12}$/;
        if (!reg.test(value)) {
          callback(new Error("请输入6~12位数字字母组合"));
          return;
        }
        callback();
      }
    };
    let validateRePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else {
        if (value !== this.signForm.pass) {
          callback(new Error("两次密码输入不一致"));
          return;
        }
        callback();
      }
    };
    let validateRegcode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (value.toLowerCase() !== this.regcode.toLowerCase()) {
          this.regCodeClass.drawAgain();
          callback(new Error("验证码错误"));
          return;
        }
        callback();
      }
    };
    return {
      signForm: {
        name: "",
        pass: "",
        regcode: "",
        repass: "",
      },
      user:{
         name:"admin",
         pass:"asd123"
      },
      bg: require("./../assets/image/0076.jpg"),
      islogin: true, // 登录 or 注册
      showSign: false, // 登录框显示
      regcode: "", // 验证码
      regCodeClass: null, // 验证码类
      signRules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        repass: [{ validator: validateRePass, trigger: "blur" }],
        regcode: [{ validator: validateRegcode, trigger: "blur" }],
      },
      signSuccess: {
        // 注册成功提示框
        code: "",
        Visible: false,
      },
      loading: false,
    };
  },
  watch: {
    showSign() {
      if (this.showSign) {
        this.initRegcode();
      }
    },
  },
  computed:{
      getUser(){
        return this.$store.getters.getUser
      }
  },
  methods: {
    initRegcode() {
      this.$nextTick(() => {
        this.regCodeClass = new Canvas(this.$refs["regcode"], {
          fontSize: 20,
          lineNum: 2,
          dotNum: 10,
        });
        this.regCodeClass.draw((r) => {
          this.regcode = r;
        });
      });
    },
    choose(flag) {
      // 清空，重置之前的内容
      this.$refs["signForm"].resetFields();
      this.islogin = flag;
    },
    experience() {
      this.showSign = true;
    },
    enter(f) {
      this.$refs["signForm"].validate((valid) => {
        if (valid) {
          if (f) {
            this.login();
          } else {
            this.signUp();
          }
        } else {
          return false;
        }
      });
    },
    login() {
      // let params = {
      //   name: this.signForm.name,
      //   pass: this.signForm.pass,
      // };
      this.loading = true;

      this.$refs.signForm.validate(() => {
        if (this.signForm.name == this.user.name && this.signForm.pass == this.user.pass) {
       
           this.$store.dispatch("setuser",this.signForm.name)
            this.$router.push('/introduce');
        }else{
          this.$message.error('请输入正确账号和密码');
        }
      });
      // api.login(params).then((r) => {
      //   if (r.code === 0) {

      //   } else if (r.code === -1) {

      //     this.loading = false;
      //   } else {

      //     this.loading = false;
      //   }
      // });
    },
    signUp() {
      // let params = {
      //   name: this.signForm.name,
      //   pass: this.signForm.pass,
      // };
      this.loading = true;
      Dialog.confirm({
        title: "注册信息",
        message: this.signForm.name,
        confirmButtonColor: "red",
        width: "300",
      })
        .then(() => {
          // console.log("确定");
        })
        .catch(() => {
          // console.log("取消");
        });
      // api.signUp(params).then((r) => {
      //   if (r.code === 0) {
      //     this.$refs["signForm"].resetFields();
      //     this.islogin = true;
      //   } else if (r.code === 1) {

      //     console.log("账号已存在")
      //   } else {
      //      console.log("注册失败")
      //   }
      //   this.loading = false;
      // });
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
@import url("./../../static/css/iconfont.scss");
span {
  text-align: center;
}
.el-form-item {
  margin-left: -80px;
}
.vchat-login {
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;
  background-image: url("./../assets/image/0076.jpg");
}
.fork-me-on-github {
  width: 150px;
  height: 150px;
  background-image: url("./../assets/image/github.png");
  position: absolute;
  right: 0;
  top: 0;
  background-size: contain;
  a {
    display: block;
    width: 150px;
    height: 150px;
  }
}
.logo {
  margin-top: 15%;
  transform: translateY(0%);
  transition: transform 0.5s;
  h3.title {
    font-size: 30px;
    color: #fff;
    text-align: center;
    font-weight: 400;
    margin-bottom: 20px;
  }
  h5.title {
    font-size: 30px;
    color: #fff;
    text-align: center;
    font-weight: 400;
    animation: fide 2s infinite;
    margin-bottom: 20px;
    cursor: pointer;
  }

  h5.title:hover {
    opacity: 1;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
  @keyframes fide {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
}
.logo.active {
  transform: translateY(-100%);
}
.sign {
  width: 350px;
  // height: 370px;
  padding: 15px 25px 25px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -175px;
  animation: move 1.2s;
}
@keyframes move {
  0% {
    left: 0;
  }
  40% {
    left: 50%;
  }
  40%,
  100% {
    -webkit-transform: translate(0, 0);
  }
  50%,
  70%,
  90% {
    -webkit-transform: translate(-5px, -5px);
  }
  60%,
  80% {
    -webkit-transform: translate(5px, 5px);
  }
}
.sign .title {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.sign .title span {
  width: 100px;
  border-right: 1px solid #d5d5d5;
  cursor: pointer;
}
.sign .title span:nth-of-type(2) {
  border-right: none;
}
.sign .title span.active {
  color: #1fbeca;
}
.sign button {
  width: 100%;
  border: none;
  outline: none;
  height: 36px;
  background-color: rgba(19, 164, 192, 0.82);
  color: #fff;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
}
.sign button:hover {
  background-color: #1fbeca;
  color: #fff;
}
.login-foot {
  width: 100%;
  font-size: 12px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d5d5d5;
}
.login-foot span {
  width: 50px;
  height: 1px;
  background-color: #d5d5d5;
  display: inline-block;
  margin: 0 10px;
}
.regcode-box {
  .el-input {
    width: 190px;
  }
  canvas {
    display: inline-block;
    vertical-align: middle;
  }
}
.yanz{
  margin-left: 10px;
}
</style>
