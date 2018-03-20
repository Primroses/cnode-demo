<template>
  <div class="index">
      <img src="../assets/imgs/logo2.png" class="logo">
      <div class="spinner"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      time : 5,
    }
  },
  methods:{
    countDown(){
      this.time = 0;
    }
  },
  mounted(){
    var _this = this
    var t = null;
    t = setTimeout(this.countDown,3000)
  },
  watch:{
    time(newtime,oldtime){
      if(newtime==0){
        this.$router.push("/index");
      }
    }
  }
};
</script>
<style lang='less' scoped>
.logo{
  margin: 0 5%;
  margin-top: 100px;
  width: 90%;
  
}
.spinner {
  width: 120px;
  height: 120px;
  background-color: #67cf22;

  margin: 30% auto;
  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}

.welcome{
  width: 100%;
  text-align: center;
  margin-top: 100px;
  color:#67cf22;
}
</style>
