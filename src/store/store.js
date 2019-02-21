import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export const store = new Vuex.Store({
    state: {
        users: [],
        auth: {},
        categories: [],
        situations: [],
        comments: [],
        filteredSearch: "",
        isLoggedIn: false
    },
    getters: {
        getCategoryByCategoryId: (state) => (category_id) => {
            return state.categories.filter(category => category.id == category_id)[0];
        },
        getUsersByUserId: (state) => (user_id) => {
            return state.users.filter(user => user.id == user_id)[0];
        },
        getSituationBySituationId: (state) => (situation_id) => {
            return state.situations.filter(situation => situation.id == situation_id)[0];
        },
        getCommentByCommentId: (state) => (comment_id) => {
            return state.comments.filter(comment => comment.id == comment_id);
        },
        getUserCommentsBySituationId: (state) => (situation_id) => {
            return state.comments.filter(comment => comment.id == situation_id).map(comment => { return {...comment, 
                username: state.users.find(u => u.id == comment.user_id).username} })
        },
        getLoggedIn: state => state.isLoggedIn   
    },
    actions: {
        getCategories(context) {
            console.log('running category action')
            return axios.get('http://localhost:8000/categories').then((results) => {
                context.commit('getCategories', results.data)
            })
          },
        getUsers(context) {
            console.log('running user action')
            return axios.get('http://localhost:8000/users').then((results) => {
                context.commit('getUsers', results.data)
            })
        },
        getSituations(context) {
            console.log('running situation action')
            return axios.get('http://localhost:8000/situations').then((results) => {
                context.commit('getSituations', results.data)
            })
        },
        getComments(context) {
            console.log('running comment action')
            return axios.get('http://localhost:8000/comments').then((results) => {
                context.commit('getComments', results.data)
            })
        },
    },
    mutations: {
        getCategories(state, categories){
            state.categories = categories;
        },
        getUsers(state, users){
            state.users = users;
        },
        getSituations(state, situations){
            state.situations = situations;
        },
        getComments(state, comments){
            state.comments = comments;
        }
    }
})