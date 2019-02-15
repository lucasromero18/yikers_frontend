<template> 
  <div>
    <v-toolbar class='red darken-4' id='yikersnav'>
      
     <a id="exclamation" depressed href="/"><h1>!</h1></a>

      <v-spacer><h2 id="yikersNav">Yikers</h2></v-spacer>


      <v-btn v-if="isLoggedIn" icon to="/createSituation">
        <v-icon id="navIcon">mdi-pencil</v-icon>
      </v-btn>

      <v-btn v-if="isLoggedIn" icon to="/userProfile/:id">
        <v-icon id="navIcon">mdi-account-edit</v-icon>
      </v-btn>
      <div>
        <router-link class="login" to="/login" v-if="!isLoggedIn">Login</router-link>
      </div>
      <div>
        <router-link class="register" to="/register" v-if="!isLoggedIn">Register</router-link>
      </div>
    </v-toolbar>
  </div>
</template>

<script>


export default {
    
  data () {
    return {
      isLoggedIn: false
    }
  }
}

</script>

<style>

#navIcon{
  color: white;
  font-size: 30px;
}

#exclamation{
  font-family: 'Bangers', cursive;
  color: white;
  font-size: 40px;
  text-decoration: none;
}

#yikersNav{
  font-family: 'Bangers', cursive;
  text-align: center;
  color: white;
}

.login{
  color: white;
  font-family: 'Bangers', cursive;
  text-decoration: none;
}

.register{
    color: white;
  font-family: 'Bangers', cursive;
  text-decoration: none;
  margin-left: 20px;
}



</style>