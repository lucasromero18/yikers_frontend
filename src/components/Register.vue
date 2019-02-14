<template>
  <div>
    <div>
      <h1 id="registerHeader">Register</h1>
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
              label="Email"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm8 md5>
            <v-text-field
              class="titleOutline"
              label="Age"
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
              <v-btn id="goButtonRegister" to="/login" @click="submit">Go!</v-btn>
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
#registerHeader{
  font-family: 'Bangers', cursive;
  text-align: center;
  font-size: 75px;
  margin-top: 2%;
  letter-spacing: 3px;
  margin-bottom: 3%;
}

.formContainer{
  justify-content: center !important;
}

#buttonContainer{
  margin-bottom: 10%;
  margin-right: 45%;
}


#goButtonRegister{
  background-color: black !important;
  color: white !important;
  font-family: 'Abel', sans-serif;
}


</style>