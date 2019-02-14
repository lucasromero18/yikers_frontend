<template>
  <div>
    <div>
      <h1 id="loginHeader">Login</h1>
  </div>
    <div class="formContainer">
      <v-flex xs12 sm8 md5>
            <v-text-field
              class="titleOutline"
              label="Username"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm8 md5>
            <v-text-field
              class="titleOutline"
              label="Password"
              outline
            ></v-text-field>
          </v-flex>
            <v-flex id="buttonContainer" xs12 sm6 md3>
              <v-btn id="goButtonLogin" to="/categories" @click="submit">Go!</v-btn>
            </v-flex>
      </div>
  </div>
</template>

<script>


  export default {
     data(){
       return{

       }
     }
  }

</script>

<style>
#loginHeader{
   font-family: 'Bangers', cursive;
   text-align: center;
   font-size: 75px;
   margin-top: 2%;
   letter-spacing: 3px;
}

.formContainer{
  display: block;
  margin-left: 36%;
}

#buttonContainer{
 margin-left: 15%;
}

#goButtonLogin{
  text-align: center;
  background-color: black !important;
  color: white !important;
  margin-bottom: 5%;
  font-family: 'Abel', sans-serif;
}


</style>