<template>
<div> 
  <div>
    <h1 id="categoriesHeader">Categories</h1>
  </div>
  <div>
    <h2 id="description">Choose from various categories containing filtered situations of your choice!</h2>
  </div>
  <div class="categoryContainer">
    <v-layout row wrap>
      <v-flex  v-for="category in categories" class="categoryDisplay":key="`${category.id}`" xs4>
        <v-btn :to="`/individualCategory/${category.id}`" class="red darken-4" large><h1 class="categories">{{ category.category }}</h1></v-btn>
      </v-flex> 
    </v-layout>
  </div>
</div>
</template>

<script>


export default {
    data(){
      return{
      }
    }, 
    created(){
      this.$store.dispatch('getCategories')
    },
    computed: {
      categories(){
        return this.$store.state.categories;
      }
    }
}

</script>

<style>
#categoriesHeader{
  font-family: 'Bangers', cursive;
  text-align: center;
   font-size: 75px;
   margin-top: 3%;
   letter-spacing: 3px;
}

#description{
  text-align: center;
  margin-bottom: 2%;
  font-family: 'Abel', sans-serif;
}


.categoryContainer{
  margin-bottom: 8%;
}

.categoryDisplay{
  justify-content: center;
  display: flex;
}

.categories{
  font-family: 'Bangers', cursive;
  color: white;
  letter-spacing: 3px;
}



</style>