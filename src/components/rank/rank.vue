<template>
  <div class="rank">
    <scroll :data='topList' class="toplist">
      <ul>
        <li v-for="item in topList" class="item" @click="selectItem(item)">
          <div class="icon">
            <img v-lazy="item.picUrl" width="100" height="100">
          </div>
          <ul class="songlist">
            <li v-for="(song,index) in item.songList" class="song">
              <span>{{index+1}}</span>
              <span>{{song.songname}}-{{song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getTopList} from 'api/rank.js'
  import {ERR_OK} from 'api/config'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  export default {
    data(){
      return {
        topList:[]
      }
    },
    created(){
      this._getTopList()
    },
    methods:{
      selectItem(item){
        this.$router.push({
          path: `rank/${item.id}`,
          query: {
            a: 1
          }
        })
        this.$store.commit('SET_SINGER',item)
      },
      _getTopList(){
        getTopList().then((res)=>{
          if(res.code===ERR_OK){
            this.topList = res.data.topList;
          }
        })
      }
    },
    components:{
      Scroll,
      Loading
    }
  };
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~common/stylus/variable';
  @import "~common/stylus/mixin"
  .rank
    position fixed
    top 88px
    width 100%
    bottom 0
    .toplist
      height 100%
      overflow: hidden
      .item
        height 100px
        display flex
        margin 0 20px
        padding-top 20px
        &:last-child
          padding-bottom: 20px
        .songlist
          flex 1
          display flex
          flex-direction column
          justify-content center
          height 100px
          padding 0 20px
          overflow hidden
          background: $color-highlight-background
          color: $color-text-d
          font-size: $font-size-small
          .song
            no-wrap()
            line-height 26px
      .loading-container
        position absolute
        top 50%
        width 100%
            
</style>
