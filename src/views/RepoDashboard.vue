<template>
  <main>
    <!-- 
      SEARCH BAR COMPONENT
      1] ALL THE LOGIC CAN HAPPEN IN THE COMPONENT ? YES

      SOME PLACEHOLDER FOR THE DISPLAY REPO BEFORE SEARCH BEGINS?

      1] DISPLAY-REPOS COMPONENT -- ACCEPTS AS THE PROP THE ARRAY FROM STATE...SHOW IF USER IS FOUND ONLY.
      3] IF USER HAS BEEN FOUND AND HAS NO REPOS -- INFORM USER.
      4] IF USER HASNT BEEN FOUND AT ALL INFORM USER.
      5] IF THERE WAS SERVER ERROR -- INFORM USER --- OR HE WILL BE INFORMED IN SEARCHBAR COMPONENT?
      
      USE MAP STATE
    -->

    <!-- USE PROPS OR HAVE THE REPOS IN VUEX?? -->
    <BaseBox> <SearchBar @error="catchError($event)" /></BaseBox>
    <ErrorMessage v-if="error"> User not found </ErrorMessage>
    <RepoList />
  </main>
</template>

<script>
// @ is an alias to /src
import BaseBox from "@/components/reusables/Box.vue";
import SearchBar from "@/components/SearchBar.vue";
import RepoList from "@/components/RepoList.vue";
import ErrorMessage from "@/components/reusables/ErrorMessage.vue";

export default {
  data() {
    return {
      error: null,
    };
  },
  methods: {
    catchError(state) {
      console.log(state);
      console.log("event emitted");
      this.error = state;
    },
  },
  components: {
    SearchBar,
    RepoList,
    BaseBox,
    ErrorMessage,
  },
};
</script>
