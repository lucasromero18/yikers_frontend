<template>
  <div>
    <h1 id="categoryName">{{category.category}}</h1>
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
        <v-flex xs12>
          <v-card class="cardContainer">
            <v-card-title class="situationsContainer" primary-title>
            <div>
              <div class="usernameSituation">@{{ user.username }}</div>
              <h2 class="headline">{{ situation.title }}</h2>
              <span class="situationText">{{ situation.situation }}</span>
            </div>
          </v-card-title>
             <v-card-actions class="links">
              <div>
                <v-btn flat>Like</v-btn>
                <v-btn flat>Dislike</v-btn>
              </div>
              <div class="buttonContainer">
              <v-btn class="viewSolution" icon @click="show = !show">
                <span class="showNoShow">{{ show ? 'Close' : 'See ' + user.username + ' Solution' }}</span>
              </v-btn>
              </div>
            </v-card-actions>
            <v-slide-y-transition>
            <div>
              <v-card-text class="solutionText" v-show="show">
                <h1 id="solution">Solution</h1>
                <span>{{ situation.solution }}</span>
                <div  v-for="c in userComments">
                <h1 id="commentUsername">@{{c.username}}</h1>
                <div class="commentContainer">
                  <span>{{c.comment}}</span>
                  </div>
                </div>
                <h1 id="yikersScaleHeader">Rate this solution with the Yikers scale!</h1>
                <v-slider class="slider" v-model="value" step="5" thumb-label></v-slider>
                <v-flex class="commentInputContainer" xs6>
                <v-textarea outline name="input-7-4" label='Leave a Comment' value=""></v-textarea>
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
    category(){
      return this.$store.getters.getCategoryByCategoryId(this.$route.params.id);
    },
    user(){
    return this.$store.getters.getUsersByUserId(this.$route.params.id);
    },
    situation(){
      return this.$store.getters.getSituationBySituationId(this.$route.params.id);
    },
    userComments(){
    return this.$store.getters.getUserCommentsBySituationId(this.$route.params.id);
    }
  }
}

</script>

<style>
#categoryName{
  font-family: 'Bangers', cursive;
  font-size: 80px;
  text-align: center;
  margin-top: 2%;
  letter-spacing: 2px;
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

#commentUsername{
   font-family: 'Bangers', cursive;
   font-size: 20px;
   letter-spacing: 2px;
   margin-top: 2%;
}

.commentContainer{

}

#yikersScaleHeader{
  font-size: 25px;
   font-family: 'Bangers', cursive;
   color: #b71c1c;
   margin-left: 60%; 
   margin-top: 2%;
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