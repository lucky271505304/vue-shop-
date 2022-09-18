<template>
<div>
   <TypeNav/>
   <List/>
   <Recommend/>
   <Rank/>
</div>
</template>

<script>
import List from '@/views/Home/List/List.vue'
import Recommend from '@/views/Home/Recommend/Recommend.vue'
import Rank from '@/views/Home/Rank/Rank.vue'
   export default{
       name: 'Home',
       components:{
           List,
           Recommend,
           Rank
       },
       mounted(){
           //获取用户信息在首页展示
           this.$store.dispatch('getUserInfo');
       }
   }
</script>

<style scoped lang="less">

</style>