import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export const store = new Vuex.Store({
    state: {
        users: [],
        categories: [],
        situations: [],
        comments: [],
        filteredSearch: ""
    },
    actions: {
        getCategories(context) {
            return 
            axios.get('http://localhost:8000/categories').then((results) => {
              context.commit('displayCategories', results)
            })
          },
        getUsers(context) {
            return
            axios.get('http://localhost:8000/users').then((results) => {
                context.commit('displayUsers', results)
            })
        },
        getSituations(context) {
            return
            axios.get('http://localhost:8000/situations').then((results) => {
                context.commit('displaySituations', results)
            })
        },
        getComments(context) {
            return
            axios.get('http://localhost:8000/comments').then((results) => {
                context.commit('displayComments', results)
            })
        },
    },
})