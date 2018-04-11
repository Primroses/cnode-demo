<template>
  <div class="topics" id="topics">
    <anim v-show="showData"></anim>
    <div @click="goback" class="goback">返回</div>
    <div class="content">
      <div class="topics-header clearfix">
          <div class="top-title">
              {{ data_topic.title }}
          </div>
        </div>
        <div class="top-config">
          <span>·发布于{{ data_topic.create_at| times}}</span><span>·作者{{ data_topic.author.loginname }}</span>
          <span>·{{ data_topic.visit_count }}浏览</span><span>来自:{{ data_topic.tab | tab }}</span>
        </div>
        <div class='markdown-body'  v-html="data_topic.content"></div>
    </div>
    <div class="center">
       <div class="coll clearfix" @click="collection"><img src="../assets/imgs/shoucang1.png" width="25" height="25">收藏</div> 
       <div class="replyBtn" @click="reply">回复{{ data_topic.reply_count }}条</div>
    </div>
    <div class="reply_centent">
      <input type="text" placeholder="请输入你的评论">
      <div class="replyBtn" @click="reply">回复</div>
    </div>
    <template v-for="(item,index) in data_reply">
      <div class="reply clearfix" :key="item.id">
        <h2><img :src=item.author.avatar_url></h2>
        <p><span>{{ item.author.loginname }}</span><span class="blue">{{ index+1 }}楼</span><span class="blue">{{ item.create_at | times }}</span></p>
      </div>
      <div :key="item.author_id" class="topic-word reply-content markdown-body" v-html="item.content">

      </div>
    </template>
  </div>
</template>

<script>
import anim from "../components/animate";
import fetchData from "../utils/fetch";
import times from "../utils/times";
export default {
  components: { anim },
  data() {
    return {
      data_topic: [],
      top: false,
      good: true,
      showData: false,
      data_reply: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    collection() {
      let loginState = localStorage.getItem("loginState");
      if (!loginState) {
        alert("请先登录");
        this.$router.push({ path: "/index/mine" });
      } else {
        alert("麻烦亲,请登录您的号,进行收藏");
      }
    },
    reply() {
      fetchData("POST",'/topic',{
        
      }).then(res=>{

      }).catch(err=>{

      })
    }
  },
  mounted() {
    let id = window.location.href.split("?")[1];
    let self = this;
    console.log(id);
    fetchData("GET", "topic/" + id)
      .then(res => {
        console.log(res);
        self.data_topic = res.data;
        self.data_reply = res.data.replies;
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    times(str) {
      return times(str);
    },
    tab(str) {
      if (str === "share") {
        return "分享";
      } else if (str === "good") {
        return "精华";
      } else if (str === "top") {
        return "置顶";
      } else {
        return "招聘";
      }
    }
  },
  deactivated() {
    this.$destroy(true);
  }
};
</script>

<style lang="less" scoped>
.topics {
  height: 500px;
  overflow: scroll;
  .goback {
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 5px;
    border-radius: 10px;
    color: #67cf22;
    border: 1px solid #67cf22;
    text-align: center;
    line-height: 40px;
    background-color: white;
  }
  .content {
    .topics-header {
      width: 70%;
      margin: 0 15%;
      // text-align: center;
      .top-img {
        float: left;
        width: 10%;
        padding-top: 5px;
        img {
          width: 100%;
        }
      }
      .top-title {
        width: 100%;
        height: 35px;
        line-height: 25px;
        font-size: 16px;
        float: left;
        // text-align: center;
      }
    }
    .top-config {
      margin: 15px 0 0 0;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
      color: #d1d1d1;
    }
    .markdown-body {
      padding: 10px;
    }
  }
  .center {
    width: 80%;
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
    .coll {
      img {
        // padding-top: 10px;
        float: left;
      }
      line-height: 25px;
      height: 25px;
    }
    .replyBtn {
      font-size: 16px;
      width: 70px;
      height: 25px;
      background-color: #67cf22;
      color: white;
      text-align: center;
    }
  }
  .reply_centent {
    border: 1px solid #67cf22;
    margin: 20px 0;
    height: 50px;
    width: 79%;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    input {
      border: 0px;
      outline: none;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
    }
    .replyBtn {
      font-size: 16px;
      width: 70px;
      height: 25px;
      line-height: 25px;
      background-color: white;
      margin-top: 10px;
      text-align: center;
    }
  }
  .reply {
    font-size: 0.17rem;
    padding-left: 20px;
    height: 50px;
    h2 {
      width: 10%;
      float: left;
      img {
        width: 100%;
      }
    }
    p {
      float: left;
      span {
        margin-left: 20px;
      }
      span.blue {
        color: skyblue;
      }
    }
    .reply-content {
      margin-top: 0.15rem;
      p {
        img {
          max-width: 100%;
          border: 0;
          vertical-align: middle;
        }
      }
      img {
        max-width: 100%;
        border: 0;
        vertical-align: middle;
      }
    }
  }
  .topic-word {
    padding-left: 20px;
    margin: 10px 0;
    border-bottom: 1px solid #d1d1d1;
  }
}
</style>
