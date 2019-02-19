<template>
  <div>
    <h1 id="categoryName">Category Name</h1>
    <div class="sortBySearchContainer">
    <v-container class="situationContainer">
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

    <v-container>
       <v-layout row>
        <v-flex xs12 >
          <v-card class="cardContainer">
            <v-card-title class="situationsContainer" primary-title>
            <div>
              <div class="usernameSituation">@username</div>
              <h2 class="headline">Situation</h2>
              <span class="situationText">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span>
            </div>
          </v-card-title>
             <v-card-actions class="links">
              <div>
                <v-btn flat>Like</v-btn>
                <v-btn flat>Dislike</v-btn>
              </div>
              <div class="buttonContainer">
              <v-btn class="viewSolution" icon @click="show = !show">
                <span class="showNoShow">{{ show ? 'Close' : 'See *usernames* Solution' }}</span>
              </v-btn>
              </div>
            </v-card-actions>
            <v-slide-y-transition>
            <div>
              <v-card-text class="solutionText" v-show="show">
              <h1 id="solution">Solution</h1>
              <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</span>
              <h1 id="yikersScaleHeader">Rate this solution with the Yikers scale!</h1>
              <v-slider class="slider" v-model="value" step="5" thumb-label></v-slider>
              <v-flex class="commentInputContainer" xs6>
              <v-textarea outline name="input-7-4" label="Leave a Comment" value=""></v-textarea>
              <v-btn id="addComment">Add Comment</v-btn>
              </v-flex>
            </v-card-text>
            </div>
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
      show: false,
      value: 0
    }
  },
  created(){
   this.$store.dispatch('getUsers'),
   this.$store.dispatch('getCategories'),
   this.$store.dispatch('getSituations'),
   this.$store.dispatch('getComments')
  },
  computed: {
    categories(){
      return this.$store.state.categories
    },
    users(){
      return this.$store.state.users
    },
    situations(){
      return this.$store.state.situations
    },
    comments(){
      return this.$store.state.comments
    }
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

.cardContainer{
  margin-bottom: 5%;
}


.headline{
  font-family: 'Bangers', cursive !important;
  color: #b71c1c;
}

.usernameSituation{
  font-family: 'Bangers', cursive !important;
  letter-spacing: 1px;
}

.situationText{
  font-family: 'Abel', sans-serif;
  font-size: 20px;
}

.showNoShow{
  font-family: 'Abel', sans-serif;
}

.buttonContainer{
  margin-left: 70%;
}

#solution{
  font-family: 'Bangers', cursive !important;
  color: #b71c1c;
  font-size: 25px;
}

.solutionText{
  font-family: 'Abel', sans-serif;
  font-size: 20px;
}

#yikersScaleHeader{
  font-size: 25px;
   font-family: 'Bangers', cursive;
   color: #b71c1c;
   margin-left: 60%; 
}

.slider{
  width: 40%;
  float: right;
  margin-top: 5%;
}

.commentInputContainer{
 width: 30%;
 margin-top: 2%;
}

#addComment{
  color: white;
  background-color: #b71c1c;
  font-family: 'Bangers', cursive;
}



</style>