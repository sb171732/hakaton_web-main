<template>
   <div id="app">
    <el-button type="text" v-if="user!=null">выход</el-button>
    <!-- <el-menu class="nav" :default-active="activeIndex" router mode="horizontal">
      <el-menu-item index="1" route="/admin/providers">Поставщики</el-menu-item>
      <el-menu-item index="2" route="/admin/menu">Список товаров</el-menu-item>
      
    </el-menu> -->
        <router-view></router-view>
   </div>
</template>

<script>
import {store} from './store'
export default {
  name: 'app',
  data() {
    return{
      activeIndex:'1',
     
    }
  },
  computed:{
    user(){
      return store.state.user
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Kanit&family=Poppins&display=swap');
body {
  font-family: 'Alata';
  /* background-image: radial-gradient( circle farthest-corner at 6.6% 12%,  rgba(64,0,126,1) 20.8%, rgba(0,255,160,1) 100.2% );  */
}
.nav {
  display: flex;
  justify-content: space-between;
}
#app {
  font-family: 'Alata';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 10px;
}
</style>
