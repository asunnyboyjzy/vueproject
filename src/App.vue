<template>
  <div id="app">
    <div>首页</div>
    <ul class='nav'>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/Cart">购物车</router-link></li>
      <li><router-link to="/Cartgroy">分类页</router-link></li>
      <li><router-link to="/Myfavorite">我的最爱</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
import Cart from './components/Cart'
import Cartgroy from './components/Cartgroy'
import Myfavorite from './components/Myfavorite'
import Me from './components/Me'
import User from './components/User'
export default{
  name: 'App',
  components: {
    Home, Cart, Cartgroy, Myfavorite, Me, User
  }
}
</script>
<style>
  .nav{
    display:flex;
    list-style: none;
    width:500px;
    margin:0 auto;
  }
  .nav>li{
    padding:0;
    margin:0;
    flex:1;
  }
  #app{
    width:500px;
    margin:0 auto;
  }
</style>
