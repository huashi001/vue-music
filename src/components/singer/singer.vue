<template>
  <div>
    <scroll :data='singers' class="singer">
      <div>
        <ul>
          <li v-for="item in singers" @click="selectItem(item)">  
            <img v-lazy="item.singer_pic">
            <span class="name">{{item.singer_name}}</span>
          </li>
        </ul>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import {getSingerList} from "api/singer";
import {ERR_OK} from "api/config";
import jsonp from "jsonp";
export default {
  data() {
    return {
      singers: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    selectItem(item){
      this.$router.push({
        path:`/singer/${item.singer_id}`
      });
      this.$store.commit('SET_SINGER',item);
    },
    _getSingerList(){
     getSingerList().then((res)=>{
       if(res.code==ERR_OK){
         this.singers=res.singerList.data.singerlist;
       }
     }) 
    }
  },
  components:{
    Scroll
  }

};
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~common/stylus/variable';
  .singer
    position fixed
    top 88px
    height 100%
    width 100%
    overflow hidden
    bottom 0
    background: $color-background
    li
      height 50px
      padding 20px 0 0 30px
      display: flex
      align-items: center
      width 100%
      img
        width 50px
        height 50px
        border-radius 50%
      .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
</style>
