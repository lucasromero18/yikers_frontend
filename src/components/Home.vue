<template>
<div>
  <div id="headerContainer">
    <h1 id="yikersHeader">Yikers!</h1>
  </div>
  <div class="flex-life">
    <div id="loginRegisterContainer">
        <v-btn  class="loginRegister" to="/login" large>Login</v-btn>
        <v-btn  class="loginRegister" to="/register" large>Register</v-btn>
    </div>
    
  </div>
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
#headerContainer{
  margin-top: 4%;
  margin-bottom: 5%;
}

#yikersHeader{
  font-family: 'Bangers', cursive;
  text-align: center;
  font-size: 160px;
  color: white;
  background-color: black;
  letter-spacing: 10px;
}

.loginRegisterContainer{
  display: inline-block;
}

.loginRegister{
  text-align: center;
  background-color: black !important;
  color: white !important;
}
.flex-life{
  display: flex;
  justify-content: center;
}



</style>