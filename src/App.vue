<template>
  <div id="app">
    <router-view v-cloak/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
@import "./assets/reset.less";
[v-cloak] {
  display: none;
}
</style>
