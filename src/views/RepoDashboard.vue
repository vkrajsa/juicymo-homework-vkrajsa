<template>
  <main class="pb-4">
    <SearchBar @error="catchError($event)" />
    <UserProfile></UserProfile>
    <RepoList />
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import RepoList from "@/components/RepoList.vue";
import UserProfile from "@/components/UserProfile.vue";

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
    UserProfile,
  },
};
</script>

<style lang="scss">
</style>