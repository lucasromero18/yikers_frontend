<template>
  <div>
    <div>
      <h1 id="registerHeader">Register</h1>
    </div>
    <div class="formContainer">
      <v-flex xs12 sm8 md5>
            <v-text-field v-model="username"
              class="titleOutline"
              label="Username"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm8 md5>
            <v-text-field v-model="email"
              class="titleOutline"
              label="Email"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm8 md5>
            <v-text-field v-model="age"
              class="titleOutline"
              label="Age"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm8 md5>
            <v-text-field v-model="password"
              class="titleOutline"
              label="Password"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex id="buttonContainer" xs12 sm6 md3>
              <v-btn id="goButtonRegister" @click="register">Go!</v-btn>
          </v-flex>
        </div>
      </div>
</template>

<script>
import axios from 'axios'


export default {
    data(){
      return{
        username: "",
        email: "",
        age: "",
        password: ""
      }
    },
    methods: {
      register(){
      axios.post('http://localhost:8000/api/register').then( (response) => {
      console.log(response);
      this.$router.push('/login')
    }).catch( (error) => {
      console.log(error);
    })
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
  margin-bottom: 2%;
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