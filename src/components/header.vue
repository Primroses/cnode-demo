<template>
  <div class="header clearfix">
      <div class="nav">
          <router-link :to="{path:'/index/theme/all'}" class="nav_word">全部</router-link>
      </div>
      <div class="nav" >
          <router-link :to="{path:'/index/theme/good'}" class="nav_word">精华</router-link>
      </div>
      <div class="nav">
          <router-link :to="{path:'/index/theme/share'}" class="nav_word">分享</router-link>
      </div>
      <div class="nav">
          <router-link :to="{path:'/index/theme/job'}" class="nav_word">招聘</router-link>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    .header{
        width: 100%;
        margin-top: 10px;
        border-bottom: 1px solid #67cf22;
        height: 40px;
        line-height: 40px;
        .nav{
            float: left;
            width: 25%;
            text-align: center;
            // color:#C1C1C1;
            .nav_word{
                color:#C1C1C1;
            }
            .router-link-active{
                color:#67cf22;
            }
        }

    }
</style>
