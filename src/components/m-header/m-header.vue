<template>
  <div class="header">
      <div class="icon"></div>
      <h2 class="text">Li Music</h2>
      <router-link tag='div' to='/user/login' class='text denglu' v-if="!isLoged">登录</router-link>
      <router-link tag='div' to='/user/center' class='text denglu' v-if="isLoged">个人中心</router-link>
  </div>
</template>

<script>
export default {
  computed:{
    isLoged(){
      return this.$store.getters.userName
    }
  }
};
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~common/stylus/variable';
  @import "~common/stylus/mixin";

  .header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      bg-image('logo')
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .denglu
      position absolute
      right 20px
</style>
