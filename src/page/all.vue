<template>
  <div class="toplist clearfix" @scroll="scroll($event)" ref="article">
      <template v-for="(item, index)  in datalist" class="">
        <router-link :to="{path:'/index/topics?'+item.id}" :key="item.last_reply_at+index"  class="clearfix">
            <div class="content-logo">
              <img :src="item.author.avatar_url">
            </div>
            <div class="collect-word">
            <div class="grade">
            <div v-if="item.good==true">
              <img src="../assets/imgs/essence.png">
              </div>
              <div v-else-if="item.top ==true">
                  <img src="../assets/imgs/top.png">
                </div>
              <div v-else>
                <img src="../assets/imgs/top1.png">
              </div>
             </div>
              <p class="word-titile">{{item.title}}</p>
              <p><span class="word-left">{{`${item.reply_count}/${item.visit_count}`}}</span><span class="word-right">{{item.last_reply_at | times}}</span></p>
            </div>
          </router-link>
        </template>
        <div @click.stop.prevent="toTop" id="btn">
          <img src="../assets/imgs/toTop.png" v-show="isShowTop">
        </div>
  </div>
</template>
<script>
import { topicList } from "../utils/api";
import times from "../utils/times";
import fetchData from "../utils/fetch";
export default {
  data() {
    return {
      datalist: [],
      isShowTop: false,
      page: 1,
      over: false
    };
  },
  created() {
    let self = this;
    topicList()
      .then(res => {
        console.log(res);
        self.datalist = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    scroll(event) {
      var self = this;
      if (
        event.target.scrollTop + event.target.clientHeight ===
        event.target.scrollHeight
      ) {
        fetchData("GET", `topics?limit=50&page=${this.page++}`).then(res => {
          self.datalist = self.datalist.concat(res.data);
          console.log(self.datalist);
        });
      }
      if(event.target.scrollTop>100){
        self.isShowTop = true;
      }else if(event.target.scrollTop === 0){
        self.isShowTop = false;
      }
    },
    toTop() {
      // $resf 获取Dom 绑定元素
      if (this.$refs.article.scrollTop <= 0) {
        return;
      }
      let time = setInterval(() => {
        if (this.$refs.article.scrollTop <= 0) {
          clearInterval(time);
        }
        this.$refs.article.scrollTop -= 200;
      }, 1);
    }
  },
  filters: {
    times(str) {
      return times(str);
    }
  }
};
</script>
<style lang="less" scoped>
#btn {
  width: 50px;
  height: 50px;
  // background-color: red;
  text-align: center;
  line-height: 50px;
  color: gray;
  position: fixed;
  right: 0;
  bottom: 30%;
}
.toplist {
  padding-left: 5%;
  width: 90%;
  border-bottom: 1px solid #d1d1d1;
  height: 490px;
  overflow: scroll;
  // line-height: 20px;
  padding-top: 10px;
  .content-logo {
    width: 15%;
    // line-height: 80px;
    img {
      width: 100%;
      float: left;
    }
  }
  .grade {
    float: left;
    width: 10%;
    img {
      width: 80%;
      margin: 0 10%;
    }
  }
  .collect-word {
    height: 32px;
    line-height: 32px;
    p {
      font-size: 13px;
    }
    .word-titile {
      // width: 80%;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .word-left {
    // float: left;
    // margin-left: 20px;
    color: #d1d1d1;
  }
  .word-right {
    float: right;
    margin-right: 20px;
  }
  .line {
    height: 1px;
    width: 90%;
    margin: 0 5%;
    background-color: #d1d1d1;
    margin-bottom: 10px;
  }
}
</style>

