<template>
  <div id="app">
    <NavBar />
    <router-view ></router-view>
    <div class="clearfix"></div>
    <Fotter />
    
  </div>
</template>


<script>
// @ is an alias to /src
import NavBar from "./components/Navbar";
import Fotter from "./components/Fotter";

export default {
  name: "App",
  components: {
    NavBar,
    Fotter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
