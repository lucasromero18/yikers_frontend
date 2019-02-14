<template> 
  <div>
    <v-toolbar class='red darken-4' id='yikersnav'>
      
     <a id="exclamation" depressed href="/"><h1>!</h1></a>

      <v-spacer><h2 id="yikersNav">Yikers</h2></v-spacer>


      <v-btn icon to="/createSituation">
        <v-icon id="navIcon">mdi-pencil</v-icon>
      </v-btn>

      <v-btn icon to="/userProfile/:id">
        <v-icon id="navIcon">mdi-account-edit</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>


export default {
    
  data () {
    return {
      
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



</style>