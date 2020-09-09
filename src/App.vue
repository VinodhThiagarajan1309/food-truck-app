<template>
  <div id="app">
    <FoodTruckHomeScreen msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FoodTruckHomeScreen from './components/FoodTruckHomeScreen.vue'

export default {
  name: 'App',
  components: {
    FoodTruckHomeScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {

background-size: auto;
background-color: #332E3C;
 background-repeat: no-repeat;

  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; 
}
</style>
