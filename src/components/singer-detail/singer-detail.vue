<template>
  <transition name="slide" > 
    <music-list :title="title" :bg-image='bgImage' :songs='songs'></music-list>
  </transition>
</template>

<script>
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import MusicList from 'components/music-list/music-list'
import {createSong} from 'common/js/song'

export default {
  computed:{
    title(){
      return this.$store.getters.singer.singer_name
    },
    bgImage(){
      return this.$store.getters.singer.singer_pic
    }
  },
  data() {
    return {
      songs:[]
    };
  },
  created(){
    this._getDetail()
  },
 
  methods:{
    _getDetail(){
      getSingerDetail(this.$store.getters.singer.singer_mid).then((res)=>{
        if(res.code===ERR_OK){
          this.songs = this._normalizeSongs(res.data.list);  
        }
      })
    },
    _normalizeSongs(list){
      let ret=[];
      list.forEach(item => {
        let {musicData} =item
        if(musicData.songid&&musicData.albummid){
          ret.push(createSong(musicData))
        }
      });
      return ret;
    }
  },
  components:{
    MusicList
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~common/stylus/variable';
  .singer-detail
    position fixed
    z-index 100
    top 0
    bottom 0
    left 0
    right 0
    background $color-background
  .slide-enter-active,.slide-leave-active
    transition all 0.3s
  .slide-enter,.slide-leave-to
    transform translate3d(100%,0,0)
</style>
