<template> 
  <div>
    <v-toolbar class='red darken-4' id='yikersnav'>
      
     <router-link id="exclamation" depressed to="/"><h1>!</h1></router-link>

      <v-spacer><h2 v-if="isLoggedIn" id="yikersNav">Yikers</h2></v-spacer>


      <v-btn v-if="this.$store.state.isLoggedIn" icon to="/createSituation">
        <v-icon id="navIcon">mdi-pencil</v-icon>
      </v-btn>

      <v-btn v-if="this.$store.state.isLoggedIn" icon :to="`/userProfile/${user.id}`">
        <v-icon id="navIcon">mdi-account-edit</v-icon>
      </v-btn>
      <div>
        <router-link class="login" to="/login" v-if="!this.$store.state.isLoggedIn">Login</router-link>
      </div>
      <div>
        <router-link class="register" to="/register" v-if="!this.$store.state.isLoggedIn">Register</router-link>
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
  font-size: 20px;
}

.register{
    color: white;
  font-family: 'Bangers', cursive;
  text-decoration: none;
  margin-left: 20px;
  font-size: 20px;
}



</style>