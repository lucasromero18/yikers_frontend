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

    <v-container class="situationsContainer">
       <v-layout row>
    <v-flex xs12 >
      <v-card>

        <v-card-title primary-title>
          <div>
            <div class="headline">Top western road trips</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
           This is where the comments will populate on the situation.
          </v-card-text>
        </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>


export default {
    
  data () {
    return {
      items: ['Most Recent', 'Most Rated', 'Trending'],
      show: false
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


.filterButton{
  background-color: black !important;
  color: white !important;
  font-family: 'Abel', sans-serif;
}


#filterButton{
  background-color: black;
  color: white;
}

.situationsContainer{
  width: 100%;
}




</style>