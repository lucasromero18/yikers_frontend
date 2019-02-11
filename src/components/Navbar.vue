<template> 
  <div>
    <v-toolbar id='yikersnav'>
      <v-btn icon to="/">
        <v-icon large>mdi-alert-circle</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon to="/createSituation">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn icon to="/userProfile/:id">
        <v-icon>mdi-account-edit</v-icon>
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
#yikersnav {
  background-color: #D50000
}



</style>