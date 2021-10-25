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
    user: {},
    userRepos: [],
  },
  mutations: {

    setUserRepos: (state, userRepos) => {
      state.userRepos = userRepos;
    },

    setUser: (state, user) => {
      state.user = user;
    },


  },
  actions: {

    async fetchUserRepos( { commit }, userName )  {
    
      console.log(auth)
     
        commit("setUserRepos", []);
        commit("setUser", {});
        const fetchUser = await axios.get(`${gitApiURL}/users/${userName}` , {auth});
        const fetchUserRepos = await axios.get(`${gitApiURL}/users/${userName}/repos` , {auth});
        console.log(fetchUser);
        commit("setUserRepos" , fetchUserRepos.data);
        commit("setUser" , fetchUser.data);
        return fetchUserRepos;
        
      
      // catch (error) {
      //   console.log(error);
      //   PROC TO BEZ THROW NEHAZE ERROR DO SEARCHBARU?
      //   throw Error (error);
      // }
    },


    async fetchRepoData ( state , repoName )  {
  
        const user = state.state.user.login;
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
