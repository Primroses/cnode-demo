<template>
  <div>
    <div class="mess-logo">
      <img src="../assets/imgs/Mess.png">
    </div>
    <div class="mess-content">
      <div v-if="showmes" class="mess-word">
        没有消息喔
      </div>
      <div v-else>
        你有这些消息
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from '../utils/fetch'
export default {
  data(){
    return{
      showmes : true
    }
  },
  mounted(){
    let self = this;
    if(localStorage.getItem('loginState')){
      console.log(1)
      fetchData('GET',`message/count?accesstoken=cfffbe87-293a-4133-a4e2-4147f3e390f9`).then(res=>{
        console.log(res)
        if(res.data===0){

        }
      }).catch(err=>{
        console.log(err)
      })
    }else{
      console.log(2)
    }
  },
  methods:{
    btn(){
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.mess-logo{
  margin: 30px auto;
  text-align: center;
}
.mess-word{
  text-align: center;
}
</style>
