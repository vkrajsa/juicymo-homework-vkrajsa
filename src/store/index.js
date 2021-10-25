import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import auth from '../api/gitKeys.js'

const gitApiURL = "https://api.github.com"

const auth = {
  username: "vkrajsa",
  password: "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"

}


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
    
      console.log(auth)
     
        commit("resetRepos");
        const fetchUserRepos = await axios.get(`${gitApiURL}/users/${userName}/repos` , {auth});
        // console.log(fetchUserRepos);
        commit("updateUserRepos" , fetchUserRepos.data);
        commit("updateUser" , userName);
        return fetchUserRepos;
        
      
      // catch (error) {
      //   console.log(error);
      //   PROC TO BEZ THROW NEHAZE ERROR DO SEARCHBARU?
      //   throw Error (error);
      // }
    },


    async fetchRepoData ( state , repoName )  {
  
        const user = state.state.user;
        const repoData = {};
        const fetchCommits = await axios.get(`${gitApiURL}/repos/${user}/${repoName}/commits` , {auth});
        const fetchBranches = await axios.get(`${gitApiURL}/repos/${user}/${repoName}/branches` ,  {auth});
        repoData.branches = fetchBranches.data;
        repoData.commits =  fetchCommits.data;
        return repoData;
     
    }
  },

  modules: {
  }
})
