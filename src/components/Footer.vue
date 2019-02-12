<template>
   <v-footer class='red darken-4' id="yikersFooter" height="40px">
    <v-layout justify-center row wrap>
        <h5 id="copyright">&copy;2019 — <strong>Yikers</strong></h5>
      </v-flex>
    </v-layout>
  </v-footer>
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
#yikersFooter{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
}
#copyright{
  color: white;
}


</style>