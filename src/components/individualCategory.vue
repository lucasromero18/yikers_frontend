<template>
  <div>
    <h1 id="categoryName">Category Name</h1>
    <div class="sortBySearchContainer">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm5 d-flex>
          <v-select class="sortBy" label="Sort By" solo :items="items"></v-select>
          <v-btn class="filterButton">Sort</v-btn>
        </v-flex>
        <v-flex xs12 sm2 d-flex>
        </v-flex>
        <v-flex xs12 sm5 d-flex>
            <v-text-field
              label="Filter Search" solo class="sortBy"></v-text-field>
            <v-btn class="filterButton">Filter</v-btn>
          </v-flex>
      </v-layout>
    </v-container>
    </div>
  </div>
</template>

<script>


export default {
    
  data () {
    return {
      items: ['Most Recent', 'Most Rated', 'Trending']
    }
  },
  created(){
   this.$store.dispatch('getCategories')
  },
  computed: {
    // categories(){
    //   return this.$store.state.categories.filter(category => category.id == this.$store.match.params.id)[0]
    // }
  }
}

</script>

<style>
#categoryName{
  font-family: 'Bangers', cursive;
  font-size: 50px;
  text-align: center;
  margin-top: 2%;
}

.sortBySearchContainer{
margin-top: 2%;
display: flex;
}

.sortBy{
}

.filterButton{
  background-color: black !important;
  color: white !important;
  font-family: 'Abel', sans-serif;
}

.filterSearchInput{
}

#filterButton{
  background-color: black;
  color: white;
}




</style>