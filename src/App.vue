<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Home from './components/Home.vue'
  import Login from './components/Login.vue'
  import Register from './components/Register.vue'
  import Categories from './components/Categories.vue'
  import individualCategory from './components/individualCategory.vue'
  import createSituation from './components/createSituation.vue'
  import userProfile from './components/userProfile.vue'
  import Footer from './components/Footer.vue'

export default {
  components: {
    'Navbar': Navbar,
    'Home': Home,
    'Login': Login,
    'Register': Register,
    'Categories': Categories,
    'individualCategory': individualCategory,
    'createSituation': createSituation,
    'userProfile': userProfile,
    'Footer': Footer
},
  data () {
    return {
      
    }
  }
}

</script>

<style>




</style>

