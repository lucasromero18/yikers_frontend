<template>
  <div>
    <div>
      <h1 id="registerHeader">Register</h1>
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
      v-model="email"
      v-validate="'required|email'"
      label="email"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="age"
      v-validate="'required|age'"
      label="age"
      data-vv-name="age"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      v-validate="'required|password'"
      label="password"
      data-vv-name="password"
      required
    ></v-text-field>
    </div>
    <div id="registerButtonContainer">
      <v-btn id="goButton" to="/login" @click="submit">Go!</v-btn>
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
      username: '',
      email: '',
      age: '',
      password: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
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
        this.name = ''
        this.email = ''
        this.age = ''
        this.password = ''
        this.$validator.reset()
      }
    }
}

</script>

<style>
#registerHeader{
   font-family: 'Bangers', cursive;
   text-align: center;
   font-size: 75px;
   margin-top: 4%;
   letter-spacing: 3px;
   color: white;
   background-color: black;
}

#registerButtonContainer{
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