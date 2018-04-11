<template>
  <div class="newTopic">
      <h1>
          <img src="../assets/imgs/newTopic.png">
      </h1>
      <div class="newTopic_content">
          <div>
              发表的主题类型:
              <select>
                  <option>分享</option>
                  <option>问答</option>
                  <option>招聘</option>                  
              </select>
          </div>
          <div class="title">
              <input type="text" placeholder="请输入标题">
            </div>
            <textarea>

            </textarea>
            <div class="verify" @click="verify">确认发布</div>
      </div>    
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        verify(){
            console.log("")
        }
    }
};
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  margin-top: 10px;
}
.newTopic_content {
  text-align: center;
  margin-top: 20px;
  .title {
    width: 80%;
    margin: 30px 10%;
    input {
      font-size: 20px;
      border: 0px;
      outline: none;
      border-bottom: 1px solid black;
    }
  }
  textarea{
      resize: none;
      width: 80%;
      height: 200px;
      margin:  0 10%;
  }
  .verify{
      margin: 0 auto;
      margin-top: 30px;
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #67cf22;
      color:white;
  }
}
</style>
