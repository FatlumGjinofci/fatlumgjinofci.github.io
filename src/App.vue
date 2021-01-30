<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Nav/Navbar'
import Footer from "@/components/Partials/Footer";
// import Main from './components/Main'

export default {
  name: 'App',
  components: {
    // Main,
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
