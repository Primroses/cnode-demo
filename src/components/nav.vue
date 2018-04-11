<template>
  <div class="bottom-Nav clearfix">
      <router-link :to="{path : '/index/theme'}">
        <div class="nav-block">
          <h1 class="icon-1 icon"></h1>
          <span>主题</span>
        </div>
      </router-link>

        <router-link :to="{path : '/index/shoucang'}">
            <div class="nav-block">
            <h1 class="icon-2 icon"></h1>
            <span>收藏</span>
            </div>
      </router-link>

       <router-link :to="{path : '/index/newTopic'}">
            <div class="nav-block">
            <h1 class=" icon"><img src="../assets/imgs/add1.png"></h1>
            </div>
      </router-link>

       <router-link :to="{path : '/index/mine'}">
            <div class="nav-block">
            <h1 class="icon-3 icon"></h1>
            <span>我的</span>
            </div>
      </router-link>

       <router-link :to="{path : '/index/message'}">
            <div class="nav-block">
            <h1 class="icon-4 icon"></h1>
            <span>消息</span>
            </div>
      </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      created(){
        
      }
    };
  }
};
</script>

<style lang="less" scoped>
.bottom-Nav {
  width: 100%;
  height: 55px;
  background-color: white;
  z-index: 10;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid #67cf22;
  padding-top: 5px;
  .nav-block {
    width: 20%;
    float: left;
    text-align: center;
    color:#C1C1C1;
    h1 img{
        width: 60%;
        margin-top: 5px;
    }
    .icon{
      width: 80%;
      height: 30px;
      margin: 0 10%;
      margin-bottom: 5px;
    }
    .icon-1{
      background: url(../assets/imgs/theme.png) center center no-repeat;
      background-size: contain;
    }
    .icon-2{
      background: url(../assets/imgs/shoucang.png) center center no-repeat;
      background-size: contain;
    }
    .icon-3{
      background: url(../assets/imgs/mine.png) center center no-repeat;
      background-size: contain;
    }
    .icon-4{
      background: url(../assets/imgs/message.png) center center no-repeat;
      background-size: contain;
    }
  }

  .router-link-active{
    span{
        color:#67cf22;
    }
    .icon-1{
      background: url(../assets/imgs/theme1.png) center center no-repeat;
      background-size: contain;
    }
    .icon-2{
      background: url(../assets/imgs/shoucang1.png) center center no-repeat;
      background-size: contain;
    }
    .icon-3{
      background: url(../assets/imgs/mine1.png) center center no-repeat;
      background-size: contain;
    }
    .icon-4{
      background: url(../assets/imgs/message1.png) center center no-repeat;
      background-size: contain;
    }
  }
}
</style>
