<template>
  <div class="user-center">
    <div>欢迎您，{{this.$store.getters.userName}}</div>
    <div class='logout' @click="logout">退出登录</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

  computed: {
    
  },
  // beforeCreate(){
  //   console.log(222)
  //   console.log(this.$store.getters.userName)
  //   if(!this.$store.getters.userName){
  //     this.$router.push('/user/login')
  //   }
  // },
  created(){
    //console.log(111)
  },
  methods: {
    logout(){
      this.$store.commit('CHANGELOG','')
      this.$router.push('/')
    }
  },

  components: {},

}
</script>

<style lang='stylus' scoped style='stylesheet/stylus'>
  @import '~common/stylus/variable.styl'
  .user-center
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background #ddd
    .logout
      position absolute
      bottom 60px
      width 100%
      height 60px
      text-align center
      background white
      color red
      font-size $font-size-large-x
      line-height 60px
</style>