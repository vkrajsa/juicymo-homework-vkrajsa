import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let gitApiURL = "https://api.github.com"

const auth = {
  username: 'vkrajsa',
  password: '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 '
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
      try {
        console.log(userName);
        commit("resetRepos");
        const fetchUserRepos = await axios.get(`${gitApiURL}/users/${userName}/repos` , auth);
        console.log(fetchUserRepos);
        commit("updateUserRepos" , fetchUserRepos.data);
        commit("updateUser" , userName);
        
      }
      catch (error) {
        console.log(error);
        // PROC TO BEZ THROW NEHAZE ERROR DO SEARCHBARU?
        throw Error (error);
      }
    },
  },

  modules: {
  }
})
