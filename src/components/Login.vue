<template>
  <div>
    <div>
      <h1 id="loginHeader">Login</h1>
  </div>
    <form @submit.prevent="login" class="formContainer">
      <v-flex xs12 sm8 md5>
            <v-text-field v-model="username"
              class="titleOutline"
              label="Username"
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
              <v-btn id="goButtonLogin" @click="login">Go!</v-btn>
            </v-flex>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import jwt from 'jsonwebtoken'

  export default {
     data(){
       return{
          username: "",
          password: ""
       }
     },
     methods: {
      login () {
        console.log(this.username, this.password)
      axios.post('http://localhost:8000/login', {
      username: this.username,
      password: this.password
      })
      .then(res => {
        console.log(res)
        res.data = JSON.parse(res.data);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.user.id)
        console.log('this is the res', res)
        console.log('you logged in')
        this.$store.state.isLoggedIn = true;

        this.$store.state.auth = {
          user: jwt.decode(localStorage.getItem('token'))
        }
        this.$router.push('/')
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
  });
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
   margin-bottom: 2%;
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