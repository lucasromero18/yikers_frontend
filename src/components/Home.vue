<template>
<div>
  <div id="headerContainer">
    <h1 id="yikersHeader">Yikers!</h1>
    <h1 id="headerSlogan">Real life situations, how will you react to them?</h1>
  </div>
  <div class="flex-life">
   <Categories />
    
  </div>
</div>

</template>

<script>

 import Categories from './Categories.vue'

export default {
    
  data () {
    return {
      
    }
  },
  components: {
    Categories
  }
}

</script>

<style>
#headerContainer{
  margin-top: 4%;
  margin-bottom: 1%;
  background-color: black;
}

#headerSlogan{
  color: white;
  font-family: 'Abel', sans-serif;
  text-align: center;
  padding-bottom: 2%;
}

#yikersHeader{
  font-family: 'Bangers', cursive;
  text-align: center;
  font-size: 160px;
  color: white;
  letter-spacing: 10px;
}

.loginRegisterContainer{
  display: inline-block;
}

.loginRegister{
  text-align: center;
  background-color: black !important;
  color: white !important;
  font-family: 'Abel', sans-serif;
}
.flex-life{
  display: flex;
  justify-content: center;
}



</style>