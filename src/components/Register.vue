<template>
  <div>
    <div>
      <h1 id="registerHeader">Register</h1>
    </div>
    <div class="formContainer">
      <v-flex xs12 sm6 md3>
            <v-text-field
              class="titleOutline"
              label="Username"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              class="titleOutline"
              label="Email"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              class="titleOutline"
              label="Age"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              class="titleOutline"
              label="Password"
              outline
            ></v-text-field>
          </v-flex>
          <div id="buttonContainer">
              <v-btn id="goButton" to="/login" @click="submit">Go!</v-btn>
            </div>
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
}

.formContainer{
  justify-content: center !important;
}

#buttonContainer{
  margin-bottom: 5%;
}


#goButton{
  margin: auto;
  background-color: black !important;
  color: white !important;
}


</style>