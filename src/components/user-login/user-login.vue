<template>
  <div class="user-login">
    <div class='form'>
      <h1 class="title">用户登录</h1>
      <div class='err' v-show="errTip">用户名或密码错误</div>
      <input type="text" name="nam"  placeholder="用户名" class="shuru" v-model="name">
      <input type="password" name="psw"  placeholder="密码" class="shuru" v-model="password">
      <input type="button" value="登录" class='shuru submit' @click="login">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name:'',
      password: '',
      errTip: false
    };
  },
  methods: {
    login(){
      if(!this.isValidName(this.name)||!this.isValidPsd(this.password)){
       this.errTip = true;
      }else{
        //to-do
        this.errTip = false;
        this.$store.commit('CHANGELOG',this.name)
        this.$router.push('/');
        // axios.post('/huashi/users',{
        //   params:{
        //     name: this.name,
        //     psd: this.password
        //   }
        // })
      }
    },
    isValidName(name){
      //八位数字，08开头
      let re = /^08\d{6}$/
      return re.test(name)

    },
    isValidPsd(password){
      //6-9位数字或者字母
      let re = /^\w{6,9}$/;
      return re.test(password)
    }
  }
}
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
  @import '~common/stylus/variable'
  .user-login
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background: $color-background
    display flex
    align-items center
    justify-content center
    .form
      width 90%
      height 220px
      box-sizing border-box
      .title
        font-size: $font-size-large
        color $color-theme
        text-align center
      .err
        color red
        margin 0 5% 0 5%
        font-size: $font-size-medium
      .shuru
        width 90%
        height 40px
        margin 20px 5% 0 5%
      .submit
        background $color-theme
</style>