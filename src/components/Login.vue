<template>
  <div>
    <div>
      <h1 id="loginHeader">Login</h1>
  </div>
    <form>
      <div id="inputContainer">
    <v-text-field
      v-model="username"
      label="userame"
      data-vv-name="username"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      v-validate="'required|email'"
      label="password"
      data-vv-name="password"
      required
    ></v-text-field>
    </div>
    <div id="loginButtonContainer">
      <v-btn id="goButton" to="/categories" @click="submit">Go!</v-btn>
      </div>
  </form>
  </div>
</template>

<script>

 import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      email: '',
      dictionary: {
        attributes: {
          password: 'password'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.username = ''
        this.password = ''
        this.$validator.reset()
      }
    }
  }

</script>

<style>
#loginHeader{
   font-family: 'Bangers', cursive;
   text-align: center;
   font-size: 75px;
   margin-top: 4%;
   letter-spacing: 3px;
   color: white;
   background-color: black;
}

#loginButtonContainer{
  display: flex;
  justify-content: center;
}

#inputContainer{
  width: 40%;
  display: block;
  justify-content: center !important;
}

#goButton{
    text-align: center;
  background-color: black !important;
  color: white !important;
}


</style>