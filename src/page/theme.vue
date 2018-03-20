<template>
  <div>
      <head-nav></head-nav>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import headNav from '../components/header'
export default {
components : {headNav}
}
</script>

<style>

</style>
