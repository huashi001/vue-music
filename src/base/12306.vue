<template>
  <div ref="wrapper" class="wrapper">
    <div style="overflow:hidden" ref="test">
    <ul ref="ul">
      <li v-for="item in items" @click="a" style="display: relative">
        <div class="item">
          <img :src="item.icon" alt="1" width="40px">
          <div style="margin-top: 5px">{{ item.title }}</div>
        </div>
      </li>
    </ul>
    </div>
    <div>
      <span v-for="item in a">-</span>
    </div>
  </div>
</template>

<script>
import {addClass} from "common/js/dom"
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

  computed: {
   a() {
     return [1,2,3]
   }
  },

  methods: {
    a(){
      let width = this.$refs.wrapper.clientWidth
      let singleWidth = (width-20)/5
      if(this.x==-(width-20)){
        this.x+=width-20
      }else{
        this.x-=width-20
      }
      //console.log(this.$refs.ul)
      let oUl = this.$refs.ul
      oUl.style.transform = `translate(${this.x}px,0)`
      oUl.style.transitionDuration = '1s'
    }
  },

  mounted(){
    let width = this.$refs.wrapper.clientWidth
    let singleWidth = Math.floor((width-20)/5)
    console.log(singleWidth)
    let oUl = this.$refs.ul
    let children = oUl.children
    oUl.style.width = singleWidth * children.length + 'px'
    this.$refs.test.style.width = singleWidth * 5 + 'px'
    this.$refs.test.style.paddingLeft = (width - singleWidth * 5 -20)/2 + 'px'
    for(let i=0;i<children.length;i++){
      children[i].style.width = singleWidth + 'px'
    }
  }

}
</script>

<style lang='stylus' scoped style='stylesheet/stylus'>
.wrapper{
  background #ccc
  color #000
  padding 10px 10px 0 10px
  box-sizing border-box
  overflow hidden
  font-size: 14px
}
ul{
  overflow hidden
  transform translate(0px,0)
  height 70px
}
li{
  height 70px
  float: left
  position: relative
  text-align: center
}
li:first-child{
  margin-left: 0px
}
.item{
}
</style>