<template>
  <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <bottom-Nav></bottom-Nav>
  </div>
</template>
<script>
import bottomNav from '@/components/nav'
export default {
  components:{bottomNav},
}
</script>

<style lang="less" scoped>

</style>
