<template>
  <div>
    <div>
      <h1 id="createSituationHeader">Create your own situation</h1>
     </div>
     <div class="dropdownContainer">
      <h1 class="labels">Pick a Category</h1>
       <v-flex xs12 sm6 d-flex>
        <v-select label="Category" outline :items="categories"></v-select>
      </v-flex>
      </div>
     <div>
      <h1 class="labels">Title</h1>
      <v-flex xs12 sm6 md3>
          <v-text-field
            class="titleOutline"
            label="Title"
            outline
          ></v-text-field>
        </v-flex>
    </div>
    <div>
    <h1 class="labels">Situation</h1>
      <v-container fluid grid-list-md>
    <v-textarea
      name="input-7-1"
      label="Situation"
      box
      auto-grow
      value=""
    ></v-textarea>
    <v-btn class="button">Submit</v-btn>
  </v-container>
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
    this.$store.dispatch('getCategories')
  },
  computed: {
  categories(){
     return this.$store.state.categories.map(category => category.category)
    }
  }
}

</script>

<style>
#createSituationHeader{
  font-family: 'Bangers', cursive;
  font-size: 50px;
  text-align: center;
  margin-top: 2%;
}

.dropdownContainer{
  margin-left: 2%;
  max-width: 45%;
}

.titleOutline{
  margin-left: 7.5% !important;
}

.labels{
  font-family: 'Bangers', cursive;
  margin-left: 2%;
  letter-spacing: 2px;
}

.button{
  background-color: black !important;
  color: white !important;
  margin-bottom: 5%;
  font-family: 'Abel', sans-serif;
}


</style>