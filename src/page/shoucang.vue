<template>
  <div class="collect">
    <anim v-show="showData"></anim>
    <div class="collect-logo">
      <img src="../assets/imgs/collection.png">
    </div>
    <template v-for="item in data_topics">
      <!-- 在V-for中定义了index后 还可以 在下面绑定获得当前的index值？ -->
      <left :key="item.id" @deleteItem="deleteItem($event)" :child-id="item.id">
        <div class="collect-content clearfix" >
          <router-link :to="{path:'/index/topics?'+item.id}">
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
      </div>
      </left>
    </template>
  </div>
</template>

<script>
import fetchData from "../utils/fetch";
import anim from "../components/animate";
import times from "../utils/times";
import left from "../components/leftdelete";
export default {
  components: { anim , left },
  data() {
    return {
      showData: true,
      data_topics: [],
      grade: 1
    };
  },
  mounted() {
    let self = this;
    fetchData("GET", "topic_collect/alsotang")
      .then(res => {
        console.log(res);
        if (res.success) {
          self.showData = false;
          self.data_topics = res.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    times(str) {
      return times(str);
    }
  },
  methods:{
    deleteItem(data){
      // 这里得到值
      // console.log(data)
    }
  }
};
</script>

<style lang="less" scoped>
.collect-logo {
  text-align: center;
  margin: 20px auto;
}

.collect-content {
  padding-left: 5%;
  width: 90%;
  border-bottom: 1px solid #d1d1d1;
  .content-logo {
    width: 15%;
    img {
      width: 100%;
      float: left;
    }
  }
  .grade {
    float: left;
  }
  .collect-word {
    height: 32px;
    line-height: 32px;
  }
  .word-left {
    float: left;
    color: #d1d1d1;
  }
  .word-right {
    float: right;
    margin-right: 20px;
  }
}
</style>
