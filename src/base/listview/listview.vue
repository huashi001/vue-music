<template>
  <scroll :data="data" class="listview">
    <ul>
      <li v-for="group in data">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group">
            
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    props:{
      data:{
        type:Array,
        default: []
      }
    },
    mounted(){
      setTimeout(()=>{
        
      },20)
    },
    methods: {
      
    },
    components:{
      Scroll
    }
  }
</script>
