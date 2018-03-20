<template>
  <div class="toplist clearfix">
      <template v-for="item in datalist" class="">
        <router-link :to="{path:'/index/topics?'+item.id}" :key="item.id" class="clearfix">
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
          <div class="line" :key="item.author_id"></div>
        </template>
  </div>
</template>
<script>
// import { topicList } from "../utils/api";
import fetchData from '../utils/fetch';
import times from '../utils/times'
export default {
  data() {
    return {
      datalist: []
    };
  },
  created() {
    let self = this ;
    fetchData("GET", "/topics?limit=20&page=1&tab=share",{},'fetch').then(res=>{
      console.log(res)
      self.datalist = res.data
    }).catch(err=>{
      console.log(err)
    })
  },
  filters:{
    times(str){
      return times(str)
    }
  }
};
</script>
<style lang="less" scoped>
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
    img{
      width: 80%;
      margin:  0 10%;
    }
  }
  .collect-word {
    height: 32px;
    line-height: 32px;
    p{
      font-size: 13px;
    }
    .word-titile{
      // width: 80%;
       white-space:nowrap;
      text-overflow:ellipsis; 
      -o-text-overflow:ellipsis; 
      overflow:hidden;
    }
  }
  .word-left {
    // float: left;
    margin-left: 20px;
    color: #d1d1d1;
  }
  .word-right {
    float: right;
    margin-right: 20px;
  }
  .line{
    height: 1px;
    width: 90%;
    margin: 0 5%;
    background-color: #d1d1d1;
    margin-bottom: 10px;
  }
}
</style>

