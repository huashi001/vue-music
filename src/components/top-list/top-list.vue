<template>
  <transition name="slider">
  <div class="toplist">
     <span>111</span>
  </div>
  </transition>
  
</template>

<script>
export default {
  created(){
    //console.log(this.$store.getters.singer)
  }
};
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~common/stylus/variable'
  .toplist
    position fixed
    z-index 100
    top 0
    bottom 0
    left 0
    right 0
    background: $color-background

  .slider-enter-active,.slider-leave-active
    transition all,0.3s

  .slider-enter,.slider-leave-to
    transform translate3d(100%,0,0) 
      
</style>
