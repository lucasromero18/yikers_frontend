<template>
  <div>
    <div class="picUsernameContainer">
        <img id="image" src="http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png" alt="profileImage">
        <h1 id="username">{{user.username}}</h1>
    </div>
    <div>
       <div class="userFormContainer">
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
              label="Image"
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
              <v-btn id="goButtonRegister" to="/login" @click="submit">Finish edit!</v-btn>
          </v-flex>
        </div>
    </div>
  </div>
</template>

<script>


export default {
    
  data () {
    return {
      
    }
  },
  created(){
   this.$store.dispatch('getUsers')
  },
  computed: {
    user(){
    return this.$store.getters.getUsersByUserId(this.$route.params.id);
    }
  }
}

</script>

<style>

.picUsernameContainer{
  display: flex;
}

#username{
  font-family: 'Bangers', cursive;
  margin-top: 1%;
  margin-left: 16%;
  margin-bottom: auto 0;
  font-size: 80px;
  letter-spacing: 2px;
}

#image{
  max-height: 250px;
  max-width: 250px;
  margin-left: 2%;
  margin-top: 2%;
}

.userFormContainer{
  margin-top: 0 auto;
  margin-left: 25%;
}



</style>