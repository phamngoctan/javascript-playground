<template>
  <div class="hello">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view></router-view> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">User</router-link>
    </div>
    <router-view />
    <hr>
    <app-info></app-info>

  </div>
</template>

<script>
import Info from './components/Info.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    'app-info': Info
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
