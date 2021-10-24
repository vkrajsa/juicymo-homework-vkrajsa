import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from '../api/gitKeys.js'

const gitApiURL = "https://api.github.com"



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    userRepos: [],
  },
  mutations: {

    updateUserRepos: (state, userRepos) => {
      state.userRepos = userRepos;
    },

    updateUser: (state, user) => {
      state.user = user;
    },

    resetRepos: (state) => {
      state.userRepos = [];
    },

  },
  actions: {

    async fetchUserRepos( { commit }, userName )  {
      try {
        console.log(auth)
        console.log(userName);
        commit("resetRepos");
        const fetchUserRepos = await axios.get(`${gitApiURL}/users/${userName}/repos` , {auth});
        // console.log(fetchUserRepos);
        commit("updateUserRepos" , fetchUserRepos.data);
        commit("updateUser" , userName);
        
      }
      catch (error) {
        console.log(error);
        // PROC TO BEZ THROW NEHAZE ERROR DO SEARCHBARU?
        throw Error (error);
      }
    },


    async fetchRepoData ( state , repoName )  {
    
      try {

        const user = state.state.user;
        const repoData = {};
        const fetchCommits = await axios.get(`${gitApiURL}/repos/${user}/${repoName}/commits` , {auth});
        const fetchBranches = await axios.get(`${gitApiURL}/repos/${user}/${repoName}/branches` ,  {auth});
        console.log(fetchCommits);
        console.log(fetchBranches);
        repoData.branches = fetchBranches.data;
        repoData.commits =  fetchCommits.data;
        return repoData;
      }
      catch (error) {
        console.log(error);
      }
    }
  },

  modules: {
  }
})
