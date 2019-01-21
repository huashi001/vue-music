<template>
  <div ref="wrapper" class="wrapper">
    <ul ref="ul">
      <li v-for="item in items" @click="a">
        <img :src="item.icon" alt="1" width="40px">
        <div>{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: require('../assets/test.png'),
          title: '正晚点',
        },
        {
          icon: require('../assets/test.png'),
          title: '正晚点',
        },
        {
          icon: require('../assets/test.png'),
          title: '温馨服务',
        },
        {
          icon: require('../assets/test.png'),
          title: '餐饮',
        },
        {
          icon: require('../assets/test.png'),
          title: '手机卡',
        },
        {
          icon: require('../assets/test.png'),
          title: '旅游',
        },
        {
          icon: require('../assets/test.png'),
          title: '铁路畅行',
        }
      ],
      x: 0
    };
  },

  computed: {},

  methods: {
    a(){
      this.x-=375
      console.log(this.$refs.ul)
      let oUl = this.$refs.ul
      oUl.style.transform = `translate(${this.x}px,0)`
    }
  },

  mounted(){
    let wrapper = this.$refs.wrapper
    console.log(wrapper)
  }

}
</script>

<style lang='stylus' scoped style='stylesheet/stylus'>
.wrapper{
  background #ccc
  color #000
  padding 10px 10px
  width 375px
  box-sizing border-box
  overflow hidden
}
ul{
  width: 500px;
  overflow hidden
  display: flex
  transform translate(0px,0)
}
li{
  width: 60px
  margin-left: 20px
}
li:first-child{
  margin-left: 0px
}
</style>