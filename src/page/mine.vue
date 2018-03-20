<template>
  <div class="mine" >
    <anim v-show="showData"></anim>
    <!-- 登录页面 -->
    <div v-if="isShow">
      <h1><img src="../assets/imgs/logo2.png"></h1>
      <div class="login clearfix">
        <div class="username"><span>用户名</span><input type="password" v-model="accesstoken"></div>
      </div>
      <div class="btn" @click="login">登录</div>
    </div>
    <!-- 登录结束后显示个人信息 -->
    <div v-else>
      <div class="logo"><img src="../assets/imgs/info.png"></div>
      <div class="img"><img src="https://avatars0.githubusercontent.com/u/25219361?v=4&s=120"></div>
      <!-- 最近主题 -->
      <div class="mineinfo clearfix">
        <div class="mineinfo-left clearfix" @click="rentheme">
          最近主题
        </div>
        <div class="mineinfo-right clearfix" @click="renreply">
          最近回复
        </div>
        <div class="mineinfo-content">
          <template v-for="item  in datalist">
            <div class="datalist" :key="item.id">
              <div class="content-top clearfix">
                <h3><img :src="item.author.avatar_url"></h3>
                <div class="word">                
                  <p class="theme">主题:{{ item.title }}</p>
                  <p><span>作者:{{ item.author.loginname }}</span></p>
                  <p>发布时间:{{ item.last_reply_at | times}}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "../utils/fetch";
import anim from "../components/animate";
import times from "../utils/times";
// 要from Vuex 而不是store -- 引入了map的辅助函数来简化管理数据流
import { mapGetters, mapActions } from "vuex";
export default {
  // 菊花动画
  components: { anim },
  data() {
    return {
      accesstoken: "cfffbe87-293a-4133-a4e2-4147f3e390f9",
      dataUrl: "",
      datalist: [],
      showData: false
    };
  },
  mounted() {
    var self = this;
    fetchData("GET", "/user/alsotang")
      .then(res => {
        console.log(res);
        console.log(self.data_topics);
        self.datalist = res.data.recent_topics;
        // console.log(self.data_topics.title);
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapGetters(["loginState", "isShow"])
  },
  methods: {
    ...mapActions(["SETLOGIN", "SETISSHOW"]),

    // 登录方法
    login() {
      var self = this;
      self.showData = true;
      // 如果出现 dispatch 没定义 就是 没有注册到main.js 里面
      fetchData("POST", "accesstoken", {
        accesstoken: "cfffbe87-293a-4133-a4e2-4147f3e390f9"
      })
        .then(res => {
          console.log(res);
          if (res.success) {
            self.showData = false;
            let user = {};
            user.accesstoken = self.accesstoken;
            user.loginname = res.loginname;
            self.SETISSHOW();
            self.$router.push({ path: "/index/mine" });
            self.SETLOGIN(user);
            self.dataUrl = res.avatar_url;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 请求主题
    rentheme() {
      var self = this;

      fetchData("GET", "/user/alsotang")
        .then(res => {
          console.log(res);
          console.log(self.data_topics);
          self.datalist = res.data.recent_topics;
          // console.log(self.data_topics.title);
        })
        .catch(err => {
          console.log(err);
        });
    },
    renreply(){
      var self = this;

      fetchData("GET", "/user/alsotang")
        .then(res => {
          console.log(res);
          console.log(self.data_topics);
          self.datalist = res.data.recent_replies;
          // console.log(self.data_topics.title);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    times(str) {
      return times(str);
    }
  }
};
</script>

<style lang='less' scoped>
.mine {
  position: relative;
  height: 530px;
  overflow: scroll;
  h1 {
    text-align: center;
    img {
      width: 100%;
      margin-top: 100px;
    }
  }
  .login {
    div {
      height: 20px;
      line-height: 20px;
      margin: 50px;
      input {
        width: 60%;
        height: 20px;
        outline: none;
      }
    }
    span {
      display: block;
      width: 20%;
      text-align: center;
      float: left;
      color: #67cf22;
    }
  }
  .btn {
    width: 20%;
    margin: 0 35% 30px;
    padding: 15px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    text-align: center;
    background-color: #67cf22;
    color: white;
  }
  .img {
    width: 30%;
    height: 100px;
    margin: 0 35%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 25%;
      transition: linear 0.25s;
    }
  }
  div.logo {
    text-align: center;
    padding: 30px;
  }

  .mineinfo {
    margin-top: 20px;
    .mineinfo-left,
    .mineinfo-right {
      float: left;
      width: 40%;
      margin: 4%;
      height: 40px;
      line-height: 40px;
      color: #67cf22;
      text-align: center;
      border:1px solid  #67cf22;
    }
    .datalist {
      width: 90%;
      margin-left: 20px;
    }
    .mineinfo-content {
      // padding-left: 20px;
      h3 {
        width: 15%;
        float: left;
        // height: 100%;
      }
      h3 img {
        width: 100%;
        border-radius: 20%;
        transition: linear 0.25s;
      }
      .content-top {
        padding-top: 30px;
      }
      .word {
        width: 70%;
        margin-left: 14%;
        p.theme {
          font-size: 16px;
          // margin-top: 35px;
          // margin-left: 70px;
          // width: 70%;
        }
        p {
          margin-left: 10px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
